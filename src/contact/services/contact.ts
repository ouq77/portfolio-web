import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {ERROR_MESSAGES} from './../models/error.messages';
import {IErrorMessage} from '../definitions/error.message';
import {ContactMessage} from '../definitions/contact.message';
import {WrappedError} from '../../shared/definitions/wrapped.error';
import {wrapError} from '../../shared/common/wrap.error';

@Injectable()
export class ContactService {
  private _http: Http;

  static getErrorMessages(): Promise<Array<IErrorMessage>> {
    return Promise.resolve(ERROR_MESSAGES);
  }

  constructor(http: Http) {
    this._http = http;
  }

  send(message: ContactMessage): Observable<JSON | WrappedError> {
    let body = JSON.stringify(message);
    let options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});
    return this._http.post('/send', body, options).map(resp => resp.json()).catch(err => wrapError(err));
  }
}
