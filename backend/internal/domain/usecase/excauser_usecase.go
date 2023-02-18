package usecase

import (
	"encoding/json"
	"fmt"
	"github.com/google/uuid"
	"github.com/xuri/excelize/v2"
	"milkazone/internal/adapters/postgres"
	"milkazone/internal/domain/entity"
	"milkazone/internal/static"
	"strings"
	"time"
)

type ExcausterUseCase struct {
	repository postgres.Repository
}

func NewExcausterUseCase(repository postgres.Repository) *ExcausterUseCase {
	return &ExcausterUseCase{repository: repository}
}

func (e ExcausterUseCase) Process(items map[string]float64) {
	mExData := readExcel()
	for _, mBearingData := range mExData {
		for _, data := range mBearingData {
			for _, v := range data {
				static.BaseInfo[v.Signal] = BaseTOT(v)
				e.Save(v)
			}
		}
	}
}

type t struct {
	Type_        string `json:"_type"`
	Code         string `json:"code"`
	Signal       string `json:"signal"`
	Bearing      string `json:"bearing"`
	ExhausterNum int    `json:"exhauster_num"`
}

func BaseTOT(v t) entity.Base {
	return entity.Base{
		Type_:        v.Type_,
		Code:         v.Code,
		Signal:       v.Signal,
		Bearing:      v.Bearing,
		ExhausterNum: v.ExhausterNum,
	}
}

func readExcel() map[int]map[string][]t {
	mExData := make(map[int]map[string][]t)
	f, err := excelize.OpenFile("backend/")
	if err != nil {
		return nil
	}

	lists := f.GetSheetList()

	for listNum, list := range lists {
		var s string
		var _type string
		mExData[listNum+1] = make(map[string][]t)
		rows, err := f.GetRows(list)
		if err != nil {
			return nil
		}
		for i, cols := range rows {
			tmp := &t{}
			if i == 0 {
				continue
			}
			for j := range cols {
				name, _ := excelize.CoordinatesToCellName(j+1, i+1)
				value, _ := f.GetCellValue(list, name)
				if j == 0 {
					s = value
				}
				//if _, ok := mExData[listNum+1][s]; !ok {
				//	tmp =  &t{}
				//}
				switch j {
				case 0:
					if strings.Contains(value, "Подшипник") {
						tmp.Bearing = value
					}
				case 2:
					if value != "Уставки" {
						_type = value
						tmp.Type_ = value
					} else {
						tmp.Type_ = _type
					}
				case 3:
					tmp.Code = value
				case 4:
					tmp.Signal = strings.TrimLeft(value, "SM_Exgauster\\\\")
				}
				tmp.ExhausterNum = listNum + 1
				//fmt.Print(value + "\t")
			}
			mExData[listNum+1][s] = append(mExData[listNum+1][s], *tmp)

			//fmt.Println()
		}
	}
	jsonStr, err := json.Marshal(mExData)
	fmt.Println(string(jsonStr))
	return mExData
}

func (e ExcausterUseCase) Save(data t) error {
	return e.repository.BaseRepo.Save(entity.Base{
		Id:           uuid.New(),
		Type_:        data.Type_,
		Code:         data.Code,
		Signal:       data.Signal,
		Bearing:      data.Bearing,
		ExhausterNum: data.ExhausterNum,
	})
}

func (e ExcausterUseCase) SaveValues(s map[string]float64) error {
	var data entity.BaseValues
	for key, val := range s {
		data = entity.BaseValues{
			Id:       uuid.New(),
			Value:    fmt.Sprintf("%f", val),
			Signal:   key,
			Datetime: time.Now(),
		}
		e.repository.BaseValRepo.Save(data)
	}
	return nil
}
