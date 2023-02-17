import { Component, OnInit } from '@angular/core';
import { BearingInfo } from 'src/app/core/model/bearing-info';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.scss'],
})
export class SecondScreenComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.bearingsHardCode = [
      {
        id: 1,
        vibration: {
          axial: {
            value: 111,
            limitValues: {
              alarmMax: 1,
              alarmMin: 1,
              warningMax: 1,
              warningMin: 1,
            },
          },
          horizontal: {
            limitValues: {
              alarmMax: 1,
              alarmMin: 1,
              warningMax: 1,
              warningMin: 1,
            },
            value: 1,
          },
          vercal: {
            limitValues: {
              alarmMax: 1,
              alarmMin: 1,
              warningMax: 1,
              warningMin: 1,
            },
            value: 1,
          },
        },
        heatingTemperature: {
          limitValues: {
            alarmMax: 300,
            alarmMin: 200,
            warningMax: 200,
            warningMin: 100,
          },
          temperatureValue: 220,
        },
      },
      {
        id: 2,
        vibration: {
          axial: {
            value: 111,
            limitValues: {
              alarmMax: 1,
              alarmMin: 1,
              warningMax: 1,
              warningMin: 1,
            },
          },
          horizontal: {
            limitValues: {
              alarmMax: 1,
              alarmMin: 1,
              warningMax: 1,
              warningMin: 1,
            },
            value: 1,
          },
          vercal: {
            limitValues: {
              alarmMax: 1,
              alarmMin: 1,
              warningMax: 1,
              warningMin: 1,
            },
            value: 1,
          },
        },
        heatingTemperature: {
          limitValues: {
            alarmMax: 1,
            alarmMin: 1,
            warningMax: 1,
            warningMin: 1,
          },
          temperatureValue: 1,
        },
      },
      {
        id: 3,
        heatingTemperature: {
          limitValues: {
            alarmMax: 1,
            alarmMin: 1,
            warningMax: 1,
            warningMin: 1,
          },
          temperatureValue: 1,
        },
      },
      {
        id: 4,
        heatingTemperature: {
          limitValues: {
            alarmMax: 1,
            alarmMin: 1,
            warningMax: 1,
            warningMin: 1,
          },
          temperatureValue: 1,
        },
      },
      {
        id: 5,
        heatingTemperature: {
          limitValues: {
            alarmMax: 1,
            alarmMin: 1,
            warningMax: 1,
            warningMin: 1,
          },
          temperatureValue: 1,
        },
      },
      {
        id: 6,
        heatingTemperature: {
          limitValues: {
            alarmMax: 1,
            alarmMin: 1,
            warningMax: 1,
            warningMin: 1,
          },
          temperatureValue: 1,
        },
      },
      {
        id: 7,
        vibration: {
          axial: {
            value: 111,
            limitValues: {
              alarmMax: 1,
              alarmMin: 1,
              warningMax: 1,
              warningMin: 1,
            },
          },
          horizontal: {
            limitValues: {
              alarmMax: 1,
              alarmMin: 1,
              warningMax: 1,
              warningMin: 1,
            },
            value: 1,
          },
          vercal: {
            limitValues: {
              alarmMax: 1,
              alarmMin: 1,
              warningMax: 1,
              warningMin: 1,
            },
            value: 1,
          },
        },
        heatingTemperature: {
          limitValues: {
            alarmMax: 1,
            alarmMin: 1,
            warningMax: 1,
            warningMin: 1,
          },
          temperatureValue: 1,
        },
      },
      {
        id: 8,
        vibration: {
          axial: {
            value: 111,
            limitValues: {
              alarmMax: 1,
              alarmMin: 1,
              warningMax: 1,
              warningMin: 1,
            },
          },
          horizontal: {
            limitValues: {
              alarmMax: 1,
              alarmMin: 1,
              warningMax: 1,
              warningMin: 1,
            },
            value: 1,
          },
          vercal: {
            limitValues: {
              alarmMax: 1,
              alarmMin: 1,
              warningMax: 1,
              warningMin: 1,
            },
            value: 1,
          },
        },
        heatingTemperature: {
          limitValues: {
            alarmMax: 1,
            alarmMin: 1,
            warningMax: 1,
            warningMin: 1,
          },
          temperatureValue: 1,
        },
      },
      {
        id: 9,
        heatingTemperature: {
          limitValues: {
            alarmMax: 10,
            alarmMin: 9,
            warningMax: 10,
            warningMin: 9,
          },
          temperatureValue: 1,
        },
      },
    ];
  }

  bearingsHardCode: BearingInfo[] | null = null;
}
