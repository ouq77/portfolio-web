import {IPoint} from './point';

/**
 * Interface for a Port object
 */
export interface IPort {
  /**
   * Port city
   */
  city: string;
  /**
   * Airport country
   */
  country: string;
  /**
   * International port code
   */
  portCode: string;
  /**
   * Location coordinates of the port
   */
  loc: IPoint;
  /**
   * Port name
   */
  name: string;
}

export class Port implements IPort {
  public city: string;
  public country: string;
  public portCode: string;
  public loc: IPoint;
  public name: string;

  constructor(city: string, country: string, portCode: string, loc: IPoint, name: string) {
    this.city = city;
    this.country = country;
    this.portCode = portCode;
    this.loc = loc;
    this.name = name;
  }
}
