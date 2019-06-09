/**
 * Interface for an Icon object
 */
import { ISize } from './size';

export interface IIcon {
  /**
   * The icon size
   */
  scaledSize: ISize;
  /**
   * The icon url
   */
  url: string;
}

export class Icon implements IIcon {
  public scaledSize: ISize;
  public url: string;

  constructor(scaledSize: ISize, url: string) {
    this.scaledSize = scaledSize;
    this.url = url;
  }
}
