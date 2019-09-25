import { delay } from '../../../shared/common/delay'

export class MapUtil {
  private _tilesLoadedEvent: any

  zoomMap(map: google.maps.Map, nextZoomLevel: number = 0, maxZoom: number = 0): void {
    if (nextZoomLevel < maxZoom) {
      this._tilesLoadedEvent = google.maps.event.addListener(map, 'tilesloaded', () => {
        google.maps.event.removeListener(this._tilesLoadedEvent)
        this.zoomMap(map, map.getZoom() + 1, maxZoom)
      })
      delay(280).then(() => {
        map.setZoom(nextZoomLevel)
      })
    } else {
      map.setOptions({
        scrollwheel: true,
      })
    }
  }
}
