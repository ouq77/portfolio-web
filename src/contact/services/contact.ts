import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ERROR_MESSAGES} from './../models/error.messages';
import {IErrorMessage} from '../definitions/error.message';
import {ContactMessage} from '../definitions/contact.message';

@Injectable()
export class ContactService {
  private _http: HttpClient;

  static getErrorMessages(): Promise<Array<IErrorMessage>> {
    return Promise.resolve(ERROR_MESSAGES);
  }

  constructor(http: HttpClient) {
    this._http = http;
  }

  send(message: ContactMessage): Observable<JSON> {
    let body = JSON.stringify(message);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post<JSON>('/send', body, {headers});
  }
}
