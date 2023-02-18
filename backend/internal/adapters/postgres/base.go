package postgres

import (
	"gorm.io/gorm"
	"milkazone/internal/domain/entity"
)

type BaseRepo struct {
	db *gorm.DB
}

func NewBaseRepo(db *gorm.DB) *BaseRepo {
	return &BaseRepo{db: db}
}

func (r BaseRepo) Save(base entity.Base) error {
	return r.db.Table(entity.Base{}.TableName()).Save(base).Error
}
