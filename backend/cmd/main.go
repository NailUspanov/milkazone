package main

import (
	"crypto/tls"
	"crypto/x509"
	"fmt"
	"github.com/Shopify/sarama"
	"github.com/gorilla/websocket"
	"io/ioutil"
	"log"
	"milkazone/internal/adapters/consumers/excauster_consumer"
	"milkazone/internal/adapters/postgres"
	"milkazone/internal/domain/usecase"
	"milkazone/internal/infrastructure/env"
	"net/http"
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

	//if err != nil {
	//	logrus.Fatalf("failed to initialize db %s", err.Error())
	//}
	fmt.Println("YOU GAY")
	usecase := usecase.NewExcausterUseCase(*postgres.NewRepository(db))
	usecase.Process(nil)

	////прокидываю инстанс бд и создаю репозитории
	//repos := repository.NewRepository(db)
	////прокидываю репозитории в сервисы
	//services := service.NewService(repos)
	////сервисы в хендлеры
	//handlers := rest.NewHandler(services)

	////запускаю сервер на порту 8000
	//srv := new(Server)
	//if err := srv.Run(viper.GetString("port"), handlers.InitRoutes()); err != nil {
	//	logrus.Fatalf("error occured while runnning http server: %s", err.Error())
	//}

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
	pemPath := "C:\\Users\\popsm\\.kafka\\YandexCA.crt"
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
	msgCount := 0

	// Get signal to finish
	doneCh := make(chan struct{})
	go func() {
		for {
			select {
			case err := <-consumer.Errors():
				fmt.Println(err)
			case msg := <-consumer.Messages():
				msgCount++
				fmt.Println("Received messages", string(msg.Key), string(msg.Value))
			case <-signals:
				fmt.Println("Interrupt is detected")
				doneCh <- struct{}{}
			}
		}
	}()

	<-doneCh
	fmt.Println("Processed", msgCount, "messages")

	//Websocket
	http.HandleFunc("/", info)
	err = http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true // Пропускаем любой запрос
	},
}

func info(w http.ResponseWriter, r *http.Request) {
	c, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade:", err)
		return
	}
	defer c.Close()
	for {
		message := "Hello"
		err = c.WriteMessage(websocket.TextMessage, []byte(message))
		if err != nil {
			log.Println("write:", err)
			break
		}
	}
}
