import event = google.maps.event;
import Map = google.maps.Map;
import MapOptions = google.maps.MapOptions;
import Marker = google.maps.Marker;
import Polyline = google.maps.Polyline;
import {Component, OnInit} from '@angular/core';
import {MapUtil} from './gmap/map.util';
import {MarkerUtil} from './gmap/marker.util';
import {PolylineUtil} from './gmap/polyline.util';
import {MAP_OPTIONS} from '../models/map.config';
import {CITIES} from '../models/cities';
import {AIRPORTS} from '../models/airports';
import {PORTS} from '../models/ports';
import {CRUISES, UPCOMING_CRUISES} from '../models/cruises';
import {FLIGHTS, UPCOMING_FLIGHTS} from '../models/flights';
import {AUCKLAND} from '../models/points';
import {IAirport} from '../definitions/airport';
import {ICity} from '../definitions/city';
import {IPort} from '../definitions/port';
import {cancelableDelay, delay} from '../../shared/common/delay';
import {elementInViewport} from '../../shared/common/element.in.viewport';

@Component({
  selector: 'googlemap',
  styleUrls: ['./travel.gmap.css'],
  templateUrl: 'travel.gmap.htm',
})
export class TravelMapComponent implements OnInit {
  public map: Map;
  private _additionalMarkerWait: number;
  private _markerDropWait: number;
  private _cityMarkers: Array<Marker>;
  private _cruiseLines: Array<Polyline>;
  private _flightLines: Array<Polyline>;
  private _mapMarkersDrawn: boolean;
  private _mapUtil: MapUtil;
  private _markerUtil: MarkerUtil;
  private _polylineUtil: PolylineUtil;
  private _markerWait: number;
  private _tilesLoaded: boolean;
  private _tilesLoadedEvent: any;
  private _timeoutScroll: any;
  private _upcomingCruiseLines: Array<Polyline>;
  private _upcomingFlightLines: Array<Polyline>;

  constructor() {
    this._additionalMarkerWait = 0;
    this._markerDropWait = 0;
    this._cityMarkers = [];
    this._cruiseLines = [];
    this._mapMarkersDrawn = false;
    this._mapUtil = new MapUtil();
    this._markerUtil = new MarkerUtil();
    this._polylineUtil = new PolylineUtil();
    this._tilesLoaded = false;
    this._upcomingCruiseLines = [];
    this._upcomingFlightLines = [];
  }

  ngOnInit() {
    this.initializeMap();
    this.initScrollListener();
  }

  initializeMap() {
    const MAP_MAX_MOBILE_ZOOM_ZERO: number = 768;
    (($: JQueryStatic) =>
      delay(250).then(() => {
        let mapOptions: MapOptions = Object.assign({}, MAP_OPTIONS);
        if ($(window).width() < MAP_MAX_MOBILE_ZOOM_ZERO) {
          mapOptions.zoom = 1;
          mapOptions.minZoom = 1;
        }
        this.map = new Map(document.getElementById('map-canvas'), mapOptions);
        this._flightLines = this._polylineUtil.createPolylines(FLIGHTS, this.map, '#494c54');
        this._upcomingFlightLines = this._polylineUtil.createDottedPolylines(UPCOMING_FLIGHTS, this.map, '#494c54');
        this._cruiseLines = this._polylineUtil.createPolylines(CRUISES, this.map, '#00739c');
        this._upcomingCruiseLines = this._polylineUtil.createDottedPolylines(UPCOMING_CRUISES, this.map, '#00739c');
        this._tilesLoadedEvent = event.addListener(this.map, 'tilesloaded', () => {
          event.removeListener(this._tilesLoadedEvent);
          this._tilesLoaded = true;
          this.dropMarkersDrawLines();
        });
      }))(jQuery);
  }

  initScrollListener() {
    (($: JQueryStatic) => {
      $(document).on('scroll', () => {
        // wait half a second for scroll to stop
        if (this._timeoutScroll) {
          clearTimeout(this._timeoutScroll);
        }
        this._timeoutScroll = cancelableDelay(250, () => {
          if (!this._mapMarkersDrawn) {
            this.dropMarkersDrawLines(500);
          }
        });
      });
    })(jQuery);
  }

  dropMarkersDrawLines(wait: number = 750) {
    this._markerWait = wait;
    (($: JQueryStatic) =>
      $('.js_trigger_map_marker').each((index: number, triggerEl: Element) => {
        if (!this._mapMarkersDrawn && elementInViewport($, <JQuery>$(triggerEl)) && this._tilesLoaded) {
          this._mapMarkersDrawn = true;
          delay(this._markerWait).then(() => {
            AIRPORTS.forEach((airport: IAirport) => {
              this._markerDropWait++;
              delay(this._markerDropWait * 135)
                .then(() => this._markerUtil.addAirportMarker(this.map, airport));
            });
            PORTS.forEach((port: IPort) => {
              this._markerDropWait++;
              delay(this._markerDropWait * 135)
                .then(() => this._markerUtil.addPortMarker(this.map, port));
            });
            this._polylineUtil.pushToPolylines(this._flightLines, FLIGHTS);
            this._polylineUtil.pushToPolylines(this._upcomingFlightLines, UPCOMING_FLIGHTS);
            this._polylineUtil.pushToPolylines(this._cruiseLines, CRUISES);
            this._polylineUtil.pushToPolylines(this._upcomingCruiseLines, UPCOMING_CRUISES);

            this._additionalMarkerWait = AIRPORTS.length + PORTS.length;
            CITIES.forEach((city: ICity, index: number) =>
              delay((index * 650) + this._additionalMarkerWait)
                .then(() => this._markerUtil.addCityMarker(this.map, city, this._cityMarkers)));
            this._additionalMarkerWait = this._additionalMarkerWait * 65;
            delay((CITIES.length * 700) + this._additionalMarkerWait).then(() => {
              this.map.panTo(AUCKLAND);
              this._mapUtil.zoomMap(this.map, this.map.getZoom() + 1, 5);
            });
          });
        }
      }))(jQuery);
  }
}
