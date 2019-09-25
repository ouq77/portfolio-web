import { Icon } from './icon'
import { Point } from './point'

/**
 * Interface for a City object
 */
export interface City {
  /**
   * Location title
   */
  description: string
  /**
   * Location icon
   */
  icon: Icon
  /**
   * Location of the city
   */
  loc: Point
  /**
   * Location name
   */
  name: string
  /**
   * Current location?
   */
  current?: boolean
}
