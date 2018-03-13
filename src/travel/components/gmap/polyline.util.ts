import LatLng = google.maps.LatLng;
import Map = google.maps.Map;
import Polyline = google.maps.Polyline;
import {IPoint} from '../../definitions/point';
import {delay} from '../../../shared/common/delay';

export class PolylineUtil {
  private _lineDrawWait: number;

  constructor() {
    this._lineDrawWait = 0;
  }

  createPolylines(journeys: Array<Array<IPoint>>, map: Map, strokeColor: string): Array<Array<Polyline>> {
    const lines: Array<Polyline> = [];
    const borderLines: Array<Polyline> = [];
    journeys.forEach((journey: Array<IPoint>, index: number) => {
      lines[index] = new Polyline({
        geodesic: true,
        map,
        strokeColor,
        strokeOpacity: 0.9,
        strokeWeight: 2,
        zIndex: 2,
      });
      borderLines[index] = new Polyline({
        geodesic: true,
        map,
        strokeColor: '#ccc',
        strokeOpacity: 0.7,
        strokeWeight: 5,
        zIndex: 0,
      });
    });
    return [lines, borderLines];
  }

  createPolylineFromPath(encodedPaths: Array<string>, map: Map, strokeColor: string): void {
    encodedPaths.forEach((encodedPath: string) => {
      const path: Array<LatLng> = google.maps.geometry.encoding.decodePath(encodedPath);
      const line: Polyline = new google.maps.Polyline({
        path,
        strokeColor,
        strokeOpacity: 0.9,
        strokeWeight: 2,
        zIndex: 2,
      });
      const borderLine: Polyline = new Polyline({
        path,
        strokeColor: '#ccc',
        strokeOpacity: 0.7,
        strokeWeight: 5,
        zIndex: 0,
      });

      delay(++this._lineDrawWait * 130)
        .then(() => {
          line.setMap(map);
          borderLine.setMap(map);
        });
    });
  }

  createDottedPolylines(journeys: Array<Array<IPoint>>, map: Map, strokeColor: string): Array<Array<Polyline>> {
    const lines: Array<Polyline> = [];
    const borderLines: Array<Polyline> = [];
    journeys.forEach((journey: Array<IPoint>, index: number) => {
      lines[index] = new Polyline({
        geodesic: true,
        icons: [
          {
            icon: {
              path: 'M 0, -1 0,1',
              strokeColor,
              strokeOpacity: 0.9,
              strokeWeight: 2,
            },
            offset: '0',
            repeat: '12px',
          },
        ],
        map,
        strokeOpacity: 0,
        zIndex: 2,
      });
      borderLines[index] = new Polyline({
        geodesic: true,
        icons: [
          {
            icon: {
              path: 'M 0, -1 0,1',
              strokeColor: '#ccc',
              strokeOpacity: 0.7,
              strokeWeight: 5,
            },
            offset: '0',
            repeat: '12px',
          },
        ],
        map,
        strokeOpacity: 0,
        zIndex: 0,
      });
    });
    return [lines, borderLines];
  }

  createDottedPolylineFromPath(encodedPaths: Array<string>, map: Map, strokeColor: string): void {
    encodedPaths.forEach((encodedPath: string) => {
      const path: Array<LatLng> = google.maps.geometry.encoding.decodePath(encodedPath);
      const line: Polyline = new google.maps.Polyline({
        icons: [
          {
            icon: {
              path: 'M 0, -1 0,1',
              strokeColor,
              strokeOpacity: 0.9,
              strokeWeight: 2,
            },
            offset: '0',
            repeat: '12px',
          },
        ],
        path,
        strokeOpacity: 0,
        zIndex: 2,
      });
      const borderLine: Polyline = new Polyline({
        icons: [
          {
            icon: {
              path: 'M 0, -1 0,1',
              strokeColor: '#ccc',
              strokeOpacity: 0.7,
              strokeWeight: 5,
            },
            offset: '0',
            repeat: '12px',
          },
        ],
        path,
        strokeOpacity: 0,
        zIndex: 0,
      });

      delay(++this._lineDrawWait * 130)
        .then(() => {
          line.setMap(map);
          borderLine.setMap(map);
        });
    });
  }

  pushToPolylines(polylines: Array<Array<Polyline>>, journeys: Array<Array<IPoint>>): void {
    journeys.forEach((journey: Array<IPoint>, index: number) => {
      const polyline: Polyline = polylines[0][index];
      const borderPolyline: Polyline = polylines[1][index];
      this._lineDrawWait++;
      journey.forEach((leg: IPoint) =>
        delay(this._lineDrawWait * 130)
          .then(() => {
            const coordinates = new LatLng(leg.lat, leg.lng);
            polyline.getPath().push(coordinates);
            borderPolyline.getPath().push(coordinates);
          }));
    });
  }
}
