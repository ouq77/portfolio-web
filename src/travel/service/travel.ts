import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {RailTrips} from '../definitions/rail.trips';
import {WrappedError} from '../../shared/definitions/wrapped.error';
import {wrapError} from '../../shared/common/wrap.error';

@Injectable()
export class TravelService {
  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  getRailTripPaths(): Observable<RailTrips | WrappedError> {
    return this._http.get<RailTrips>('/railtrips').catch(err => wrapError(err));
  }
}
