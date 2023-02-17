package main

import (
	"fmt"
	"github.com/sirupsen/logrus"
	"milkazone/backend/internal/adapters/postgres"
	"milkazone/backend/internal/infrastructure/env"
)

func main() {

	//соединение с бд
	_, err := postgres.NewDatabase(fmt.Sprintf("host=%s port=%s dbname=%s user=%s sslmode=%s password=%s sslrootcert=%s",
		env.DbHost, env.DbPort, env.DbName, env.DbUser, env.DbSslMode, env.DbPassword, env.DbSslCertPath))
	if err != nil {
		return
	}

	if err != nil {
		logrus.Fatalf("failed to initialize db %s", err.Error())
	}

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
}
