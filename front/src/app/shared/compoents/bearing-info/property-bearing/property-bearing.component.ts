import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AxialModel,
  BearingInfo,
  HorizontalModel,
  ModelHeatingTemperature,
  VerticalModel,
  VibrationModel,
} from 'src/app/core/model/bearing-info';

@Component({
  selector: 'app-property-bearing',
  templateUrl: './property-bearing.component.html',
  styleUrls: ['./property-bearing.component.scss'],
})
export class PropertyBearingComponent {
  @Input() heatingTemperature: ModelHeatingTemperature | null = null;
  @Input() vibration: VibrationModel | null = null;
  @Output() status: EventEmitter<string> = new EventEmitter();
  mainStatus: string = '';

  getStatusProperty(
    property:
      | ModelHeatingTemperature
      | AxialModel
      | HorizontalModel
      | VerticalModel,
    value: number
  ) {
    if (value < property.limitValues.warningMin) return '';
    if (value <= property.limitValues.warningMax) {
      if (!this.mainStatus) {
        this.mainStatus = 'warning';
        this.status.emit('warning');
      }
      return 'warning';
    }
    this.status.emit('alarm');
    return 'alarm';
  }
}
