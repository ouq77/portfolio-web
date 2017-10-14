import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ImageIds} from '../definitions/image.ids';
import {WrappedError} from '../../shared/definitions/wrapped.error';
import {wrapError} from '../../shared/common/wrap.error';

@Injectable()
export class HeaderService {
  private _http: Http;

  constructor(http: Http) {
    this._http = http;
  }

  getImageIds(): Observable<ImageIds | WrappedError> {
    return this._http.get('/imageids').map(resp => resp.json()).catch(err => wrapError(err));
  }
}
