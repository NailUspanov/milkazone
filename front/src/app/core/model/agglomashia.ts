import { mapMany, mapOne } from 'src/app/shared/util/utils';
import { BearingInfo } from './bearing-info';

export class Agglomashia {
  id: number;
  name: string;
  date: Date;
  replacementDaysLeft: number;
  prediction: number;
  exgauster: ExgausterModel[];

  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
    this.date = source.date;
    this.replacementDaysLeft = source.replacementDaysLeft;
    this.prediction = source.prediction;
    this.exgauster = mapMany(ExgausterModel)(source.exgauster);
  }
}

export class ExgausterModel {
  bearings: BearingInfo[];
  mainDrive: MainDriveModel;
  cooler: CoolerModel;
  gate: number;

  constructor(source: any) {
    this.bearings = mapMany(BearingInfo)(source.bearings);
    this.mainDrive = mapOne(MainDriveModel)(source.mainDrive);
    this.cooler = mapOne(CoolerModel)(source.cooler);
    this.gate = source.gate;
  }
}
export class CoolerModel {
  tempWaterBefore: number;
  tempWaterAfter: number;
  tempOilBefore: number;
  tempOilAfter: number;

  constructor(source: any) {
    this.tempOilBefore = source.tempOilBefore;
    this.tempWaterBefore = source.tempWaterBefore;
    this.tempWaterAfter = source.tempWaterAfter;
    this.tempOilAfter = source.tempOilAfter;
  }
}
export class MainDriveModel {
  amperage: number;
  motorAmperage: number;
  rotorVoltage: number;
  starterVoltage: number;

  constructor(source: any) {
    this.amperage = source.amperage;
    this.motorAmperage = source.motorAmperage;
    this.rotorVoltage = source.rotorVoltage;
    this.starterVoltage = source.starterVoltage;
  }
}
