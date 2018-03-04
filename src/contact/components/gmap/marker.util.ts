import Animation = google.maps.Animation;
import event = google.maps.event;
import InfoWindow = google.maps.InfoWindow;
import LatLng = google.maps.LatLng;
import Map = google.maps.Map;
import Marker = google.maps.Marker;
import {CITIES, CURRENT_LOCATION} from '../../models/cities';
import {IAirport} from '../../definitions/airport';
import {ICity} from '../../definitions/city';
import {IPort} from '../../definitions/port';
import {AIRPORT_SIZE, PORT_SIZE} from '../../models/points';
import {cancelableDelay} from '../../../shared/common/delay';

export class MarkerUtil {
  private _infoWindow: InfoWindow;
  private _markerToBounce: Marker;
  private _timeoutMarkerBounce: any;

  constructor() {
    this._infoWindow = new InfoWindow();
  }

  addAirportMarker(map: Map, airport: IAirport) {
    let marker = new Marker({
      animation: Animation.DROP,
      draggable: false,
      icon: {size: AIRPORT_SIZE, url: 'assets/images/markerairport.png'},
      map,
      position: new LatLng(airport.loc.lat, airport.loc.lng),
      title: `${airport.iataCode} // ${airport.name}`,
      zIndex: 100,
    });
    event.addListener(marker, 'click', () => {
      this.toggleBounce(map, marker, airport.iataCode, `${airport.name}<br>${airport.city}, ${airport.country}`);
    });
  }

  addPortMarker(map: Map, port: IPort) {
    let marker = new Marker({
      animation: Animation.DROP,
      draggable: false,
      icon: {size: PORT_SIZE, url: 'assets/images/markerport.png'},
      map,
      position: new LatLng(port.loc.lat, port.loc.lng),
      title: `${port.portCode} // ${port.name}`,
      zIndex: 100,
    });
    event.addListener(marker, 'click', () => {
      this.toggleBounce(map, marker, port.portCode, `${port.name}<br>${port.city}, ${port.country}`);
    });
  }

  addCityMarker(map: Map, city: ICity, cityMarkers: Array<Marker>) {
    let cityMarker: Marker = new Marker({
      animation: Animation.DROP,
      draggable: false,
      icon: city.icon,
      map,
      position: new LatLng(city.loc.lat, city.loc.lng),
      title: city.name,
      zIndex: 200,
    });
    cityMarkers.push(cityMarker);
    event.addListener(cityMarker, 'click', () => {
      this.toggleBounce(map, cityMarker, city.name, city.description);
    });
  }

  initClickListener(map: Map, cityMarkers: Array<Marker>) {
    (($: JQueryStatic) => {
      $('#js_click_address').click((e: JQuery.Event) => {
        e.preventDefault();
        if (cityMarkers.length === CITIES.length) {
          let cityMarker = cityMarkers[cityMarkers.length - 1];
          if (cityMarker) {
            this.toggleBounce(map, cityMarker, CURRENT_LOCATION.name, CURRENT_LOCATION.description);
          }
        }
      });
    })(jQuery);
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
