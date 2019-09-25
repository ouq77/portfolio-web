import { Point } from './point'

/**
 * Interface for an Airport object
 */
export interface Airport {
  /**
   * Airport city
   */
  city: string
  /**
   * Airport country
   */
  country: string
  /**
   * Airport IATA code
   */
  iataCode: string
  /**
   * Location coordinates of the airport
   */
  loc: Point
  /**
   * Airport name
   */
  name: string
}
