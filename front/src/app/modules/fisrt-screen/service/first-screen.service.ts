import { BaseHttpClientService } from 'src/app/core/service/base-http-client.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FisrtScreenService extends BaseHttpClientService {
  public override baseUrl: string = '';

  getMachines() {
    return this.get('');
  }
}
