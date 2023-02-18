import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() value: number | null = null;
  @Input() scaleStep: number = 10;
  @Input() maxScale: number = 100;
  @Input() label: string = '';
  @Input() isScale: boolean = true;
  constructor() {}

  get ruler() {
    let res = [];
    for (let num = 0; num <= this.maxScale; num += this.scaleStep) {
      res.push(num);
    }
    return res;
  }
}
