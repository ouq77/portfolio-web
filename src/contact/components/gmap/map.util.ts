import event = google.maps.event;
import Map = google.maps.Map;
import {delay} from '../../../shared/common/delay';

export class MapUtil {
  private _tilesLoadedEvent: any;

  zoomMap(map: Map, nextZoomLevel: number = 0, maxZoom: number = 0) {
    if (nextZoomLevel < maxZoom) {
      this._tilesLoadedEvent = event.addListener(map, 'tilesloaded', () => {
        event.removeListener(this._tilesLoadedEvent);
        this.zoomMap(map, map.getZoom() + 1, maxZoom);
      });
      delay(280)
        .then(() => {
          map.setZoom(nextZoomLevel);
        });
    } else {
      map.setOptions({
        scrollwheel: true,
      });
    }
  }
}
