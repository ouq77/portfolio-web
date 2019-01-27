import {IIcon} from './icon';
import {IPoint} from './point';

/**
 * Interface for a City object
 */
export interface ICity {
  /**
   * Location title
   */
  description: string;
  /**
   * Location icon
   */
  icon: IIcon;
  /**
   * Location of the city
   */
  loc: IPoint;
  /**
   * Location name
   */
  name: string;
  /**
   * Current location?
   */
  current: boolean;
}

export class City implements ICity {
  public description: string;
  public icon: IIcon;
  public loc: IPoint;
  public name: string;
  public current: boolean;

  constructor(description: string, icon: IIcon, loc: IPoint, name: string, current: boolean = false) {
    this.description = description;
    this.icon = icon;
    this.loc = loc;
    this.name = name;
    this.current = current;
  }
}
