import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckBoxComponent {
  @Input() value: boolean = false;
  @Input() label: string = '';
  @Input() trueValue: boolean = false;
  @Input() propValue: string | null = null;
  @Input() name: string = '';
}
