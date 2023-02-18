package postgres

import (
	extraClausePlugin "github.com/WinterYukky/gorm-extra-clause-plugin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"log"
	"os"
)

// Конструктор
func NewDatabase(dsn string) (*gorm.DB, error) {
	cnf := &gorm.Config{}

	cnf.Logger = logger.New(log.New(os.Stdout, "\r\n", log.LstdFlags), logger.Config{
		SlowThreshold:             200,
		Colorful:                  true,
		IgnoreRecordNotFoundError: true,
		LogLevel:                  logger.Info,
	})

	db, err := gorm.Open(postgres.Open(dsn), cnf)
	if err != nil {
		return nil, err
	}

	err = db.Use(extraClausePlugin.New())
	if err != nil {
		return nil, err
	}

	return db, nil
}
