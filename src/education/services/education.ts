import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SCHOOLS} from '../models/schools';
import {School} from '../definitions/school';
import {CodeSchool} from '../definitions/code.school';

@Injectable()
export class EducationService {
  private _http: HttpClient;

  static getSchools(): Promise<Array<School>> {
    return Promise.resolve(SCHOOLS);
  }

  constructor(http: HttpClient) {
    this._http = http;
  }

  getCodeSchool(): Observable<CodeSchool> {
    return this._http.get<CodeSchool>('/codeschool');
  }
}
