import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { School } from '../definitions/school';
import { SCHOOLS } from '../models/schools';

@Injectable()
export class EducationService {
  private _http: HttpClient;

  static getSchools(): Promise<Array<School>> {
    return Promise.resolve(SCHOOLS);
  }

  constructor(http: HttpClient) {
    this._http = http;
  }
}
