import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ImageIds} from '../definitions/image.ids';
import {WrappedError} from '../../shared/definitions/wrapped.error';
import {wrapError} from '../../shared/common/wrap.error';

@Injectable()
export class HeaderService {
  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  getImageIds(): Observable<ImageIds | WrappedError> {
    return this._http.get<ImageIds>('/imageids').catch(err => wrapError(err));
  }
}
