import {
  HttpClient,
  HttpContext,
  HttpHandler,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BaseHttpClientService extends HttpClient {
  constructor(handler: HttpHandler) {
    super(handler);
  }

  public apiBase: string = '';
  public baseUrl: string = '';

  get prefixedApiUrl(): string {
    return `${this.apiBase}/${this.baseUrl ? this.baseUrl + '/' : ''}`;
  }

  public HTTP_OPTIONS_JSON = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public override get<T>(
    url: string,
    options: IHttpOptions = this.HTTP_OPTIONS_JSON
  ): Observable<T> {
    url = this.prefixedApiUrl + url;
    return super.get<T>(url, options);
  }

  public override post<T>(
    url: string,
    body?: any,
    options: IHttpOptions = this.HTTP_OPTIONS_JSON
  ): Observable<T> {
    url = this.prefixedApiUrl + url;
    return super.post<T>(url, body, options);
  }

  public override put<T>(
    url: string,
    body?: any,
    options: IHttpOptions = this.HTTP_OPTIONS_JSON
  ): Observable<T> {
    url = this.prefixedApiUrl + url;
    return super.put<T>(url, body, options);
  }

  public override delete<T>(
    url: string,
    options: IHttpOptions = this.HTTP_OPTIONS_JSON
  ): Observable<T> {
    url = this.prefixedApiUrl + url;
    return super.delete<T>(url, options);
  }
}

type IHttpOptions = {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body' | 'events' | any;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json' | 'blob' | 'arrayBuffer' | any;
  withCredentials?: boolean;
  body?: any | null;
};
