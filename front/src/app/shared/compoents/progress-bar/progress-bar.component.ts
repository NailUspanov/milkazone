import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() value: number = 0;
  @Input() scaleStep: number = 10;
  @Input() maxScale: number = 100;
  @Input() label: string = '';
  @Input() isScale: boolean = true;
  constructor() {}

  get scaleValue() {
    if (this.value > this.maxScale) this.value = this.maxScale;
    return this.value;
  }

  get ruler() {
    let res = [];
    for (
      let num = this.scaleStep;
      num <= this.maxScale;
      num += this.scaleStep
    ) {
      res.push(num);
    }
    return res;
  }
}
