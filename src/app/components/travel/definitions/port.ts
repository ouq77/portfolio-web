import { Point } from './point'

/**
 * Interface for a Port object
 */
export interface Port {
  /**
   * Port city
   */
  city: string
  /**
   * Airport country
   */
  country: string
  /**
   * International port code
   */
  portCode: string
  /**
   * Location coordinates of the port
   */
  loc: Point
  /**
   * Port name
   */
  name: string
}
