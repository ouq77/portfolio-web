import Size = google.maps.Size;

/**
 * Interface for an Icon object
 */
export interface IIcon {
  /**
   * The icon size
   */
  size: Size;
  /**
   * The icon url
   */
  url: string;
}

export class Icon implements IIcon {
  public size: Size;
  public url: string;

  constructor(size: Size, url: string) {
    this.size = size;
    this.url = url;
  }
}
