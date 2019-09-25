import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ContactMessage } from '../definitions/contact.message'
import { IErrorMessage } from '../definitions/error.message'
import { ERROR_MESSAGES } from '../models/error.messages'

@Injectable()
export class ContactService {

  static getErrorMessages(): Promise<Array<IErrorMessage>> {
    return Promise.resolve(ERROR_MESSAGES)
  }

  constructor(private _http: HttpClient) {
  }

  send(message: ContactMessage): Observable<JSON> {
    const body: string = JSON.stringify(message)
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
    return this._http.post<JSON>('/send', body, {headers})
  }
}
