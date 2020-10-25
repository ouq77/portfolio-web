import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ImageUrls } from '../definitions/image.urls'

@Injectable()
export class HeaderService {

  constructor(private _http: HttpClient) {
  }

  getImageUrls(): Observable<ImageUrls> {
    return this._http.get<ImageUrls>('/imageurls')
  }
}
