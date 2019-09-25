import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ImageIds } from '../definitions/image.ids'

@Injectable()
export class HeaderService {

  constructor(private _http: HttpClient) {
  }

  getImageIds(): Observable<ImageIds> {
    return this._http.get<ImageIds>('/imageids')
  }
}
