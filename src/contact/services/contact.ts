import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {ERROR_MESSAGES} from './../models/error.messages';
import {IErrorMessage} from '../definitions/error.message';
import {ContactMessage} from '../definitions/contact.message';
import {WrappedError} from '../../shared/definitions/wrapped.error';
import {wrapError} from '../../shared/common/wrap.error';

@Injectable()
export class ContactService {
  private _http: HttpClient;

  static getErrorMessages(): Promise<Array<IErrorMessage>> {
    return Promise.resolve(ERROR_MESSAGES);
  }

  constructor(http: HttpClient) {
    this._http = http;
  }

  send(message: ContactMessage): Observable<JSON | WrappedError> {
    let body = JSON.stringify(message);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post<JSON>('/send', body, {headers}).catch(err => wrapError(err));
  }
}
