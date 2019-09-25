import { Link } from '../definitions/link'
import { LINKS } from '../models/links'

export class FooterService {

  static getLinks(): Promise<Array<Link>> {
    return Promise.resolve(LINKS)
  }
}
