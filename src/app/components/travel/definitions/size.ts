/**
 * Interface for a Size object
 */
export interface ISize {
  /**
   * Width for the size
   */
  width: number;
  /**
   * Height for the size
   */
  height: number;
}

export class Size implements ISize {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}
