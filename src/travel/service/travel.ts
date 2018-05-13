import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RailTrips} from '../definitions/rail.trips';

@Injectable()
export class TravelService {
  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  getRailTripPaths(): Observable<RailTrips> {
    return this._http.get<RailTrips>('/railtrips');
  }
}
