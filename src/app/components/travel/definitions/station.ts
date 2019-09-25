import { Point } from './point'

/**
 * Interface for a Station object
 */
export interface Station {
  /**
   * Station city
   */
  city: string
  /**
   * Station country
   */
  country: string
  /**
   * Station code
   */
  stationCode: string
  /**
   * Location coordinates of the station
   */
  loc: Point
  /**
   * Station name
   */
  name: string
}
