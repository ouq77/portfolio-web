import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImageIds} from '../definitions/image.ids';

@Injectable()
export class HeaderService {
  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  getImageIds(): Observable<ImageIds> {
    return this._http.get<ImageIds>('/imageids');
  }
}
