import event = google.maps.event;
import Animation = google.maps.Animation;
import InfoWindow = google.maps.InfoWindow;
import LatLng = google.maps.LatLng;
import Map = google.maps.Map;
import Marker = google.maps.Marker;
import Size = google.maps.Size;
import {IAirport} from '../../definitions/airport';
import {ICity} from '../../definitions/city';
import {IPort} from '../../definitions/port';
import {AIRPORT_ICON_URL, CURRENT_ICON_URL, PORT_ICON_URL, PREVIOUS_ICON_URL, STATION_ICON_URL} from '../../models/marker.icons';
import {AIRPORT_MARKER_SIZE, CURRENT_MARKER_SIZE, PREVIOUS_MARKER_SIZE, PORT_MARKER_SIZE, STATION_MARKER_SIZE} from '../../models/marker.sizes';
import {cancelableDelay} from '../../../shared/common/delay';
import {IStation} from '../../definitions/station';

export class MarkerUtil {
  private _airportMarkers: Array<Marker> = [];
  private _portMarkers: Array<Marker> = [];
  private _stationMarkers: Array<Marker> = [];
  private _cityMarkers: Array<Marker> = [];
  private _currentCityMarker: Marker;
  private _infoWindow: InfoWindow;
  private _markerToBounce: Marker;
  private _timeoutMarkerBounce: any;
  private _sizeBase: number = 1;
  private _sizeExp1: number = 2;
  private _sizeExp2: number = 4;

  constructor() {
    this._infoWindow = new InfoWindow();
  }

  addAirportMarker(map: Map, airport: IAirport): void {
    const marker = new Marker({
      animation: Animation.DROP,
      draggable: false,
      icon: {
        scaledSize: AIRPORT_MARKER_SIZE,
        url: AIRPORT_ICON_URL,
      },
      map,
      optimized: false,
      position: new LatLng(airport.loc.lat, airport.loc.lng),
      title: `${airport.iataCode} // ${airport.name}`,
      zIndex: 100,
    });
    this._airportMarkers.push(marker);
    event.addListener(marker, 'click', () => {
      this.toggleBounce(map, marker, airport.iataCode, `${airport.name}<br>${airport.city}, ${airport.country}`);
    });
  }

  addPortMarker(map: Map, port: IPort): void {
    const marker = new Marker({
      animation: Animation.DROP,
      draggable: false,
      icon: {
        scaledSize: PORT_MARKER_SIZE,
        url: PORT_ICON_URL,
      },
      map,
      optimized: false,
      position: new LatLng(port.loc.lat, port.loc.lng),
      title: `${port.portCode} // ${port.name}`,
      zIndex: 100,
    });
    this._portMarkers.push(marker);
    event.addListener(marker, 'click', () => {
      this.toggleBounce(map, marker, port.portCode, `${port.name}<br>${port.city}, ${port.country}`);
    });
  }

  addStationMarker(map: Map, station: IStation): void {
    const marker = new Marker({
      animation: Animation.DROP,
      draggable: false,
      icon: {
        scaledSize: STATION_MARKER_SIZE,
        url: STATION_ICON_URL,
      },
      map,
      optimized: false,
      position: new LatLng(station.loc.lat, station.loc.lng),
      title: `${station.stationCode} // ${station.name}`,
      zIndex: 100,
    });
    this._stationMarkers.push(marker);
    event.addListener(marker, 'click', () => {
      this.toggleBounce(map, marker, station.stationCode, `${station.name}<br>${station.city}, ${station.country}`);
    });
  }

  addCityMarker(map: Map, city: ICity, cityMarkers: Array<Marker>): void {
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
    if (city.current) {
      this._currentCityMarker = cityMarker;
    } else {
      this._cityMarkers.push(cityMarker);
    }
    event.addListener(cityMarker, 'click', () => {
      this.toggleBounce(map, cityMarker, city.name, city.description);
    });
  }

  setZoomChangedListener(map: Map):void {
    event.addListener(map, 'zoom_changed', () => {
      const sizeExponent: number = this.getSizeExponent(map.getZoom());
      this._airportMarkers.forEach((marker: Marker) =>
        this.setIcon(marker, AIRPORT_MARKER_SIZE, AIRPORT_ICON_URL, sizeExponent));
      this._portMarkers.forEach((marker: Marker) =>
        this.setIcon(marker, PORT_MARKER_SIZE, PORT_ICON_URL, sizeExponent));
      this._stationMarkers.forEach((marker: Marker) =>
        this.setIcon(marker, STATION_MARKER_SIZE, STATION_ICON_URL, sizeExponent));
      this._cityMarkers.forEach((marker: Marker) =>
        this.setIcon(marker, PREVIOUS_MARKER_SIZE, PREVIOUS_ICON_URL, sizeExponent));
      this.setIcon(this._currentCityMarker, CURRENT_MARKER_SIZE, CURRENT_ICON_URL, sizeExponent);
    });
  }

  private setIcon(marker: Marker, size: Size, url: string, sizeExponent: number): void {
    marker.setIcon({
      scaledSize: new Size(size.width * sizeExponent, size.height * sizeExponent),
      url,
    });
  }

  private toggleBounce(map: Map, marker: Marker, infoTitle: string, infoContent: string): void {
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

  private getSizeExponent(zoom: number): number {
    switch (zoom) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        return this._sizeBase;
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
        return this._sizeExp1;
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
        return this._sizeExp2;
      default:
        return this._sizeBase;
    }
  }
}
