import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RailTrips } from '../definitions/rail.trips';

@Injectable()
export class TravelService {

  constructor(private _http: HttpClient) {
  }

  getRailTripPaths(): Observable<RailTrips> {
    return this._http.get<RailTrips>('/railtrips');
  }
}
