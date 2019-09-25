/**
 * Interface for an Icon object
 */
import { Size } from './size'

export interface Icon {
  /**
   * The icon size
   */
  scaledSize: Size
  /**
   * The icon url
   */
  url: string
}
