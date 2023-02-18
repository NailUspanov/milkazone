import { mapOne } from 'src/app/shared/util/utils';

export class BearingInfo {
  id: number;
  heatingTemperature: ModelHeatingTemperature;
  vibration?: VibrationModel;

  constructor(source: any) {
    this.id = source.id;
    this.heatingTemperature = mapOne(ModelHeatingTemperature)(
      source.temperature
    );
    this.vibration = mapOne(VibrationModel)(source.vibration);
  }
}

export class ModelHeatingTemperature {
  temperatureValue: number;
  limitValues: LimitValues;

  constructor(source: any) {
    this.temperatureValue = source.temperatureValue;
    this.limitValues = mapOne(LimitValues)(source.limitValues);
  }
}

export class LimitValues {
  alarmMax: number;
  alarmMin: number;
  warningMax: number;
  warningMin: number;

  constructor(source: any) {
    this.alarmMax = source.alarmMax;
    this.alarmMin = source.alarmMin;
    this.warningMax = source.warningMax;
    this.warningMin = source.warningMin;
  }
}

export class VibrationModel {
  axial: AxialModel;
  horizontal: HorizontalModel;
  vercal: VerticalModel;

  constructor(source: any) {
    this.axial = mapOne(AxialModel)(source.axial);
    this.horizontal = mapOne(HorizontalModel)(source.horizontal);
    this.vercal = mapOne(VerticalModel)(source.vercal);
  }
}

export class AxialModel {
  value: number;
  limitValues: LimitValues;

  constructor(source: any) {
    this.value = source.value;
    this.limitValues = mapOne(LimitValues)(source.limitValues);
  }
}

export class HorizontalModel {
  value: number;
  limitValues: LimitValues;

  constructor(source: any) {
    this.value = source.value;
    this.limitValues = mapOne(LimitValues)(source.limitValues);
  }
}
export class VerticalModel {
  value: number;
  limitValues: LimitValues;

  constructor(source: any) {
    this.value = source.value;
    this.limitValues = mapOne(LimitValues)(source.limitValues);
  }
}
