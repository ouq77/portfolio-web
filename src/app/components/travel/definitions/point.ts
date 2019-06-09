/**
 * Interface for a Point object
 */
export interface IPoint {
  /**
   * Latitude for the point
   */
  lat: number;
  /**
   * Longitude for the point
   */
  lng: number;
}

export class Point implements IPoint {
  public lat: number;
  public lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}
