import { Injectable } from '@angular/core'

import { Link } from '../definitions/link'
import { LINKS } from '../models/links'

@Injectable()
export class FooterService {

  static getLinks(): Promise<Array<Link>> {
    return Promise.resolve(LINKS)
  }
}
