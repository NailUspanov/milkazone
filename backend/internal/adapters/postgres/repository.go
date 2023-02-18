package postgres

import "gorm.io/gorm"

type Repository struct {
	BaseValRepo *BaseValuesRepo
	BaseRepo    *BaseRepo
}

func NewRepository(db *gorm.DB) *Repository {
	return &Repository{
		BaseValRepo: NewBaseValuesRepo(db),
		BaseRepo:    NewBaseRepo(db),
	}
}
