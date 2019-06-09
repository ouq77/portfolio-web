import { IPoint } from './point';

/**
 * Interface for a Station object
 */
export interface IStation {
  /**
   * Station city
   */
  city: string;
  /**
   * Station country
   */
  country: string;
  /**
   * Station code
   */
  stationCode: string;
  /**
   * Location coordinates of the station
   */
  loc: IPoint;
  /**
   * Station name
   */
  name: string;
}

export class Station implements IStation {
  public city: string;
  public country: string;
  public stationCode: string;
  public loc: IPoint;
  public name: string;

  constructor(city: string, country: string, stationCode: string, loc: IPoint, name: string) {
    this.city = city;
    this.country = country;
    this.stationCode = stationCode;
    this.loc = loc;
    this.name = name;
  }
}
