import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {SCHOOLS} from '../models/schools';
import {School} from '../definitions/school';
import {CodeSchool} from '../definitions/code.school';
import {WrappedError} from '../../shared/definitions/wrapped.error';
import {wrapError} from '../../shared/common/wrap.error';

@Injectable()
export class EducationService {
  private _http: HttpClient;

  static getSchools(): Promise<Array<School>> {
    return Promise.resolve(SCHOOLS);
  }

  constructor(http: HttpClient) {
    this._http = http;
  }

  getCodeSchool(): Observable<CodeSchool | WrappedError> {
    return this._http.get<CodeSchool>('/codeschool').catch(err => wrapError(err));
  }
}
