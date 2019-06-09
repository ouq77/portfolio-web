import { cancelableDelay } from '../../../shared/common/delay';
import { IAirport } from '../../definitions/airport';
import { ICity } from '../../definitions/city';
import { IPort } from '../../definitions/port';
import { IStation } from '../../definitions/station';
import { AIRPORT_ICON_URL, CURRENT_ICON_URL, PORT_ICON_URL, PREVIOUS_ICON_URL, STATION_ICON_URL } from '../../models/marker.icons';
import { AIRPORT_MARKER_SIZE, CURRENT_MARKER_SIZE, PORT_MARKER_SIZE, PREVIOUS_MARKER_SIZE, STATION_MARKER_SIZE } from '../../models/marker.sizes';

export class MarkerUtil {
  private _airportMarkers: Array<google.maps.Marker> = [];
  private _portMarkers: Array<google.maps.Marker> = [];
  private _stationMarkers: Array<google.maps.Marker> = [];
  private _cityMarkers: Array<google.maps.Marker> = [];
  private _infoWindow: google.maps.InfoWindow = new google.maps.InfoWindow();
  private _currentCityMarker: google.maps.Marker;
  private _sizeBase = 1;
  private _sizeExp1 = 2;
  private _sizeExp2 = 4;
  private _markerToBounce: google.maps.Marker;
  private _timeoutMarkerBounce: any;

  constructor() {
  }

  addAirportMarker(map: google.maps.Map, airport: IAirport): void {
    const marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      draggable: false,
      icon: {
        scaledSize: new google.maps.Size(AIRPORT_MARKER_SIZE.width, AIRPORT_MARKER_SIZE.height),
        url: AIRPORT_ICON_URL,
      },
      map,
      optimized: false,
      position: new google.maps.LatLng(airport.loc.lat, airport.loc.lng),
      title: `${airport.iataCode} // ${airport.name}`,
      zIndex: 100,
    });
    this._airportMarkers.push(marker);
    google.maps.event.addListener(marker, 'click', () => {
      this.toggleBounce(map, marker, airport.iataCode, `${airport.name}<br>${airport.city}, ${airport.country}`);
    });
  }

  addPortMarker(map: google.maps.Map, port: IPort): void {
    const marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      draggable: false,
      icon: {
        scaledSize: new google.maps.Size(PORT_MARKER_SIZE.width, PORT_MARKER_SIZE.height),
        url: PORT_ICON_URL,
      },
      map,
      optimized: false,
      position: new google.maps.LatLng(port.loc.lat, port.loc.lng),
      title: `${port.portCode} // ${port.name}`,
      zIndex: 100,
    });
    this._portMarkers.push(marker);
    google.maps.event.addListener(marker, 'click', () => {
      this.toggleBounce(map, marker, port.portCode, `${port.name}<br>${port.city}, ${port.country}`);
    });
  }

  addStationMarker(map: google.maps.Map, station: IStation): void {
    const marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      draggable: false,
      icon: {
        scaledSize: new google.maps.Size(STATION_MARKER_SIZE.width, STATION_MARKER_SIZE.height),
        url: STATION_ICON_URL,
      },
      map,
      optimized: false,
      position: new google.maps.LatLng(station.loc.lat, station.loc.lng),
      title: `${station.stationCode} // ${station.name}`,
      zIndex: 100,
    });
    this._stationMarkers.push(marker);
    google.maps.event.addListener(marker, 'click', () => {
      this.toggleBounce(map, marker, station.stationCode, `${station.name}<br>${station.city}, ${station.country}`);
    });
  }

  addCityMarker(map: google.maps.Map, city: ICity, cityMarkers: Array<google.maps.Marker>): void {
    const cityMarker: google.maps.Marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      draggable: false,
      icon: {
        url: city.icon.url,
        scaledSize: new google.maps.Size(city.icon.scaledSize.width, city.icon.scaledSize.height),
      },
      map,
      optimized: false,
      position: new google.maps.LatLng(city.loc.lat, city.loc.lng),
      title: city.name,
      zIndex: 200,
    });
    cityMarkers.push(cityMarker);
    if (city.current) {
      this._currentCityMarker = cityMarker;
    } else {
      this._cityMarkers.push(cityMarker);
    }
    google.maps.event.addListener(cityMarker, 'click', () => {
      this.toggleBounce(map, cityMarker, city.name, city.description);
    });
  }

  setZoomChangedListener(map: google.maps.Map): void {
    google.maps.event.addListener(map, 'zoom_changed', () => {
      const sizeExponent: number = this.getSizeExponent(map.getZoom());
      this._airportMarkers.forEach((marker: google.maps.Marker) =>
        this.setIcon(marker, new google.maps.Size(AIRPORT_MARKER_SIZE.width, AIRPORT_MARKER_SIZE.height), AIRPORT_ICON_URL, sizeExponent));
      this._portMarkers.forEach((marker: google.maps.Marker) =>
        this.setIcon(marker, new google.maps.Size(PORT_MARKER_SIZE.width, PORT_MARKER_SIZE.height), PORT_ICON_URL, sizeExponent));
      this._stationMarkers.forEach((marker: google.maps.Marker) =>
        this.setIcon(marker, new google.maps.Size(STATION_MARKER_SIZE.width, STATION_MARKER_SIZE.height), STATION_ICON_URL, sizeExponent));
      this._cityMarkers.forEach((marker: google.maps.Marker) =>
        this.setIcon(marker, new google.maps.Size(PREVIOUS_MARKER_SIZE.width, PREVIOUS_MARKER_SIZE.height), PREVIOUS_ICON_URL, sizeExponent));
      this.setIcon(this._currentCityMarker, new google.maps.Size(CURRENT_MARKER_SIZE.width, CURRENT_MARKER_SIZE.height), CURRENT_ICON_URL, sizeExponent);
    });
  }

  private setIcon(marker: google.maps.Marker, size: google.maps.Size, url: string, sizeExponent: number): void {
    marker.setIcon({
      scaledSize: new google.maps.Size(size.width * sizeExponent, size.height * sizeExponent),
      url,
    });
  }

  private toggleBounce(map: google.maps.Map, marker: google.maps.Marker, infoTitle: string, infoContent: string): void {
    if (this._timeoutMarkerBounce) {
      clearTimeout(this._timeoutMarkerBounce);
      if (this._markerToBounce) {
        this._markerToBounce.setAnimation(null);
      }
    }
    this._markerToBounce = marker;
    this._markerToBounce.setAnimation(google.maps.Animation.BOUNCE);
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
