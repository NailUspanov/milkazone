package main

import (
	"crypto/tls"
	"crypto/x509"
	"encoding/json"
	"fmt"
	"github.com/Shopify/sarama"
	"io/ioutil"
	"log"
	"milkazone/internal/adapters/consumers/excauster_consumer"
	"milkazone/internal/adapters/postgres"
	"milkazone/internal/adapters/websocket"
	"milkazone/internal/domain/usecase"
	"milkazone/internal/infrastructure/env"
	"os"
	"os/signal"
	"strings"
)

func main() {

	//соединение с бд
	db, err := postgres.NewDatabase(fmt.Sprintf("host=%s port=%s dbname=%s user=%s sslmode=%s password=%s sslrootcert=%s",
		env.DbHost, env.DbPort, env.DbName, env.DbUser, env.DbSslMode, env.DbPassword, env.DbSslCertPath))
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	log.Println("соединение с бд")
	//Websocket

	fmt.Println("YOU GAY")
	usecase := usecase.NewExcausterUseCase(*postgres.NewRepository(db))
	usecase.Process(nil)

	handler := websocket.NewHandler(usecase)
	srv := new(Server)

	go func() {
		if err := srv.Run(":8000", handler); err != nil {
			log.Fatalf("error occured while runnning http server: %s", err.Error())
		}
	}()

	log.Println("Websocket")
	//Kafka

	brokers := env.KafkaBrokers
	splitBrokers := strings.Split(brokers, ",")
	conf := sarama.NewConfig()
	conf.Producer.RequiredAcks = sarama.WaitForAll
	conf.Version = sarama.V0_10_0_0
	conf.Consumer.Return.Errors = true
	conf.ClientID = env.KafkaClientID
	conf.Metadata.Full = true
	conf.Net.SASL.Enable = true
	conf.Net.SASL.User = env.KafkaUser
	conf.Net.SASL.Password = env.KafkaPassword
	conf.Net.SASL.Handshake = true
	conf.Net.SASL.SCRAMClientGeneratorFunc = func() sarama.SCRAMClient {
		return &excauster_consumer.XDGSCRAMClient{HashGeneratorFcn: excauster_consumer.SHA512}
	}
	conf.Net.SASL.Mechanism = sarama.SASLMechanism(sarama.SASLTypeSCRAMSHA512)

	certs := x509.NewCertPool()
	pemPath := "/usr/local/share/ca-certificates/Yandex/YandexCA.crt"
	pemData, err := ioutil.ReadFile(pemPath)
	if err != nil {
		fmt.Println("Couldn't load cert: ", err.Error())
		// Handle the error
	}
	certs.AppendCertsFromPEM(pemData)

	conf.Net.TLS.Enable = true
	conf.Net.TLS.Config = &tls.Config{
		InsecureSkipVerify: true,
		RootCAs:            certs,
	}

	master, err := sarama.NewConsumer(splitBrokers, conf)
	if err != nil {
		fmt.Println("Coulnd't create consumer: ", err.Error())
		os.Exit(1)
	}

	defer func() {
		if err := master.Close(); err != nil {
			panic(err)
		}
	}()

	topic := env.KafkaTopic

	consumer, err := master.ConsumePartition(topic, 0, sarama.OffsetOldest)
	if err != nil {
		panic(err)
	}

	signals := make(chan os.Signal, 1)
	signal.Notify(signals, os.Interrupt)

	// Count the number of processed messages

	// Get signal to finish
	doneCh := make(chan struct{})
	go func() {
		for {
			select {
			case err := <-consumer.Errors():
				fmt.Println(err)
			case msg := <-consumer.Messages():
				var s map[string]float64
				json.Unmarshal(msg.Value, &s)
				go usecase.SaveValues(s)
				websocket.WriteWS(msg.Value)
				fmt.Println("Received messages", string(msg.Key), string(msg.Value))
			case <-signals:
				fmt.Println("Interrupt is detected")
				doneCh <- struct{}{}
			}
		}
	}()

	<-doneCh

	log.Println("Kafka")

}
