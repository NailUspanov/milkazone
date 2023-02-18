import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageComponent),
      multi: true,
    },
  ],
})
export class ImageComponent {
  @Input() src?: string | null;
  @Input() alt?: string;
  @Input() lazy: boolean = false;
  @Input() height?: number | string;
  @Input() width?: number | string;
  @Input() fill?: string;

  get isSvg(): boolean {
    return this.src?.endsWith('.svg') || false;
  }
}
