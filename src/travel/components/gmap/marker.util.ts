import Animation = google.maps.Animation;
import event = google.maps.event;
import InfoWindow = google.maps.InfoWindow;
import LatLng = google.maps.LatLng;
import Map = google.maps.Map;
import Marker = google.maps.Marker;
import {IAirport} from '../../definitions/airport';
import {ICity} from '../../definitions/city';
import {IPort} from '../../definitions/port';
import {AIRPORT_SIZE, PORT_SIZE} from '../../models/points';
import {cancelableDelay} from '../../../shared/common/delay';
import {IStation} from '../../definitions/station';

export class MarkerUtil {
  private _infoWindow: InfoWindow;
  private _markerToBounce: Marker;
  private _timeoutMarkerBounce: any;

  constructor() {
    this._infoWindow = new InfoWindow();
  }

  addAirportMarker(map: Map, airport: IAirport) {
    const marker = new Marker({
      animation: Animation.DROP,
      draggable: false,
      icon: {
        scaledSize: AIRPORT_SIZE,
        url: 'markers/marker-airport.svg',
      },
      map,
      optimized: false,
      position: new LatLng(airport.loc.lat, airport.loc.lng),
      title: `${airport.iataCode} // ${airport.name}`,
      zIndex: 100,
    });
    event.addListener(marker, 'click', () => {
      this.toggleBounce(map, marker, airport.iataCode, `${airport.name}<br>${airport.city}, ${airport.country}`);
    });
  }

  addPortMarker(map: Map, port: IPort) {
    const marker = new Marker({
      animation: Animation.DROP,
      draggable: false,
      icon: {
        scaledSize: PORT_SIZE,
        url: 'markers/marker-port.svg',
      },
      map,
      optimized: false,
      position: new LatLng(port.loc.lat, port.loc.lng),
      title: `${port.portCode} // ${port.name}`,
      zIndex: 100,
    });
    event.addListener(marker, 'click', () => {
      this.toggleBounce(map, marker, port.portCode, `${port.name}<br>${port.city}, ${port.country}`);
    });
  }

  addStationMarker(map: Map, station: IStation) {
    const marker = new Marker({
      animation: Animation.DROP,
      draggable: false,
      icon: {
        scaledSize: PORT_SIZE,
        url: 'markers/marker-station.svg',
      },
      map,
      optimized: false,
      position: new LatLng(station.loc.lat, station.loc.lng),
      title: `${station.stationCode} // ${station.name}`,
      zIndex: 100,
    });
    event.addListener(marker, 'click', () => {
      this.toggleBounce(map, marker, station.stationCode, `${station.name}<br>${station.city}, ${station.country}`);
    });
  }

  addCityMarker(map: Map, city: ICity, cityMarkers: Array<Marker>) {
    const cityMarker: Marker = new Marker({
      animation: Animation.DROP,
      draggable: false,
      icon: city.icon,
      map,
      optimized: false,
      position: new LatLng(city.loc.lat, city.loc.lng),
      title: city.name,
      zIndex: 200,
    });
    cityMarkers.push(cityMarker);
    event.addListener(cityMarker, 'click', () => {
      this.toggleBounce(map, cityMarker, city.name, city.description);
    });
  }

  toggleBounce(map: Map, marker: Marker, infoTitle: string, infoContent: string) {
    if (this._timeoutMarkerBounce) {
      clearTimeout(this._timeoutMarkerBounce);
      if (this._markerToBounce) {
        this._markerToBounce.setAnimation(null);
      }
    }
    this._markerToBounce = marker;
    this._markerToBounce.setAnimation(Animation.BOUNCE);
    this._infoWindow.close();
    this._infoWindow.setContent(`<div class="map-info-window"><h3>${infoTitle}</h3><p>${infoContent}</p></div>`);
    this._infoWindow.open(map, this._markerToBounce);
    this._timeoutMarkerBounce = cancelableDelay(2000, () => {
      this._markerToBounce.setAnimation(null);
      this._markerToBounce = null;
    });
  }
}
