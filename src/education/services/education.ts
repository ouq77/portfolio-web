import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SCHOOLS} from '../models/schools';
import {School} from '../definitions/school';
import {CodeSchool} from '../definitions/code.school';
import {WrappedError} from '../../shared/definitions/wrapped.error';
import {wrapError} from '../../shared/common/wrap.error';

@Injectable()
export class EducationService {
  private _http: Http;

  static getSchools(): Promise<Array<School>> {
    return Promise.resolve(SCHOOLS);
  }

  constructor(http: Http) {
    this._http = http;
  }

  getCodeSchool(): Observable<CodeSchool | WrappedError> {
    return this._http.get('/codeschool').map(resp => resp.json()).catch(err => wrapError(err));
  }
}
