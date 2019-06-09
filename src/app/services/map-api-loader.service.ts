import { MapsAPILoader } from '@agm/core';
import { Injectable } from '@angular/core';

export const initMapApi = (mapApiLoaderService: MapApiLoaderService): (() => void) =>
  (): Promise<void> => mapApiLoaderService.loadMapApi();

@Injectable()
export class MapApiLoaderService {

  constructor(private _mapsApiLoader: MapsAPILoader) {}

  loadMapApi(): Promise<void> {
    return this._mapsApiLoader.load();
  }
}
