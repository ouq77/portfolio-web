import {IPoint}  from './point';

/**
 * Interface for an Airport object
 */
export interface IAirport {
  /**
   * Airport city
   */
  city: string;
  /**
   * Airport country
   */
  country: string;
  /**
   * Airport IATA code
   */
  iataCode: string;
  /**
   * Location coordinates of the airport
   */
  loc: IPoint;
  /**
   * Airport name
   */
  name: string;
}

export  class Airport implements IAirport {
  public city: string;
  public country: string;
  public iataCode: string;
  public loc: IPoint;
  public name: string;

  constructor(city: string, country: string, iataCode: string, loc: IPoint, name: string) {
    this.city = city;
    this.country = country;
    this.iataCode = iataCode;
    this.loc = loc;
    this.name = name;
  }
}
