import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { BearingInfo } from 'src/app/core/model/bearing-info';

@Component({
  selector: 'app-baering-info',
  templateUrl: './baering-info.component.html',
  styleUrls: ['./baering-info.component.scss'],
})
export class BaeringInfoComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.modelBearingInfo);
  }
  @Input() index: number = 1;
  @Input() modelBearingInfo: BearingInfo | null = null;
}
