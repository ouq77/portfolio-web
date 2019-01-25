import Size = google.maps.Size;

/**
 * Interface for an Icon object
 */
export interface IIcon {
  /**
   * The icon size
   */
  scaledSize: Size;
  /**
   * The icon url
   */
  url: string;
}

export class Icon implements IIcon {
  public scaledSize: Size;
  public url: string;

  constructor(scaledSize: Size, url: string) {
    this.scaledSize = scaledSize;
    this.url = url;
  }
}
