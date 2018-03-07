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
}

export class City implements ICity {
  public description: string;
  public icon: IIcon;
  public loc: IPoint;
  public name: string;

  constructor(description: string, icon: IIcon, loc: IPoint, name: string) {
    this.description = description;
    this.icon = icon;
    this.loc = loc;
    this.name = name;
  }
}
