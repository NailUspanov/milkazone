package main

import (
	"fmt"
	"milkazone/internal/adapters/postgres"
	"milkazone/internal/domain/usecase"
	"milkazone/internal/infrastructure/env"
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
}
