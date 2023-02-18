package postgres

import (
	"gorm.io/gorm"
	"milkazone/internal/domain/entity"
)

type BaseValuesRepo struct {
	db *gorm.DB
}

func NewBaseValuesRepo(db *gorm.DB) *BaseValuesRepo {
	return &BaseValuesRepo{db: db}
}

func (r BaseValuesRepo) Save(baseValues entity.BaseValues) error {
	return r.db.Table(entity.BaseValues{}.TableName()).Save(baseValues).Error
}
