package entity

import (
	"github.com/google/uuid"
	"time"
)

type BaseValues struct {
	Id       uuid.UUID `json:"id" gorm:"primaryKey; type:uuid; unique; not null"`
	Value    string    `json:"value"`
	Signal   string    `json:"signal"`
	Datetime time.Time `json:"datetime" gorm:"type:timestamp""`
}

func (receiver BaseValues) TableName() string {
	return "base_values"
}

type Base struct {
	Id           uuid.UUID `json:"id" gorm:"primaryKey; type:uuid; unique; not null"`
	Type_        string    `json:"_type"`
	Code         string    `json:"code"`
	Signal       string    `json:"signal"`
	Bearing      string    `json:"bearing"`
	ExhausterNum int       `json:"exhauster_num"`
}

type BaseRequest struct {
	Base
	BaseValues
}

func (b Base) TableName() string {
	return "base"
}
