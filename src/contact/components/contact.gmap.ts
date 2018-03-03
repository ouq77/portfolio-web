import event = google.maps.event;
import LatLng = google.maps.LatLng;
import Map = google.maps.Map;
import MapOptions = google.maps.MapOptions;
import Marker = google.maps.Marker;
import Polyline = google.maps.Polyline;
import {Component, OnInit} from '@angular/core';
import {MapUtil} from './gmap/map.util';
import {MarkerUtil} from './gmap/marker.util';
import {MAP_OPTIONS} from '../models/map.config';
import {CITIES} from '../models/cities';
import {AIRPORTS} from '../models/airports';
import {PORTS} from '../models/ports';
import {CRUISES, UPCOMING_CRUISES} from '../models/cruises';
import {FLIGHTS, UPCOMING_FLIGHTS} from '../models/flights';
import * as points from '../models/points';
import {IAirport} from '../definitions/airport';
import {ICity} from '../definitions/city';
import {IPoint} from '../definitions/point';
import {IPort} from '../definitions/port';
import {cancelableDelay, delay} from '../../shared/common/delay';
import {elementInViewport} from '../../shared/common/element.in.viewport';

@Component({
  selector: 'googlemap',
  styleUrls: ['./contact.gmap.css'],
  templateUrl: 'contact.gmap.htm',
})
export class ContactMapComponent implements OnInit {
  public map: Map;
  private _additionalMarkerWait: number;
  private _markerDropWait: number;
  private _cityMarkers: Array<Marker>;
  private _cruiseLines: Array<Polyline>;
  private _flightLines: Array<Polyline>;
  private _lineDrawWait: number;
  private _mapMarkersDrawn: boolean;
  private _mapUtil: MapUtil;
  private _markerUtil: MarkerUtil;
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
    this._flightLines = [];
    this._lineDrawWait = 0;
    this._mapMarkersDrawn = false;
    this._mapUtil = new MapUtil();
    this._markerUtil = new MarkerUtil();
    this._tilesLoaded = false;
    this._upcomingCruiseLines = [];
    this._upcomingFlightLines = [];
  }

  ngOnInit() {
    this.initializeMap();
    this.initScrollListener();
    this._markerUtil.initClickListener(this.map, this._cityMarkers);
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
        FLIGHTS.forEach((flight: Array<IAirport>, index: number) =>
          this._flightLines[index] = new Polyline({
            geodesic: true,
            map: this.map,
            strokeColor: '#494c54',
            strokeOpacity: 0.7,
            strokeWeight: 2,
          }));
        UPCOMING_FLIGHTS.forEach((upcomingFlights: Array<IAirport>, index: number) =>
          this._upcomingFlightLines[index] = new Polyline({
            geodesic: true,
            icons: [
              {
                icon: {
                  path: 'M 0, -1 0,1',
                  strokeColor: '#494c54',
                  strokeOpacity: 0.7,
                  strokeWeight: 2,
                },
                offset: '0',
                repeat: '12px',
              },
            ],
            map: this.map,
            strokeOpacity: 0,
          }));
        CRUISES.forEach((cruise: Array<IPoint>, index: number) =>
          this._cruiseLines[index] = new Polyline({
            geodesic: true,
            map: this.map,
            strokeColor: '#00739c',
            strokeOpacity: 0.7,
            strokeWeight: 2,
          }));
        UPCOMING_CRUISES.forEach((upcomingCruise: Array<IPoint>, index: number) =>
          this._upcomingCruiseLines[index] = new Polyline({
            geodesic: true,
            icons: [
              {
                icon: {
                  path: 'M 0, -1 0,1',
                  strokeColor: '#00739c',
                  strokeOpacity: 0.7,
                  strokeWeight: 2,
                },
                offset: '0',
                repeat: '12px',
              },
            ],
            map: this.map,
            strokeOpacity: 0,
          }));
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
              delay(this._markerDropWait * 135).then(() => this._markerUtil.addAirportMarker(this.map, airport));
            });
            PORTS.forEach((port: IPort) => {
              this._markerDropWait++;
              delay(this._markerDropWait * 135).then(() => this._markerUtil.addPortMarker(this.map, port));
            });
            FLIGHTS.forEach((flight: Array<IAirport>, index: number) => {
              let flightLine: Polyline = this._flightLines[index];
              flight.forEach((leg: IAirport) => {
                this._lineDrawWait++;
                delay(this._lineDrawWait * 65).
                  then(() => flightLine.getPath().push(new LatLng(leg.loc.lat, leg.loc.lng)));
              });
            });
            UPCOMING_FLIGHTS.forEach((upcomingFlight: Array<IAirport>, index: number) => {
              let upcomingFlightLine: Polyline = this._upcomingFlightLines[index];
              upcomingFlight.forEach((leg: IAirport) => {
                this._lineDrawWait++;
                delay(this._lineDrawWait * 65).
                  then(() => upcomingFlightLine.getPath().push(new LatLng(leg.loc.lat, leg.loc.lng)));
              });
            });
            CRUISES.forEach((cruise: Array<IPoint>, index: number) => {
              let cruiseLine: Polyline = this._cruiseLines[index];
              cruise.forEach((leg: IPoint) => {
                this._lineDrawWait++;
                delay(this._lineDrawWait * 65).
                then(() => cruiseLine.getPath().push(new LatLng(leg.lat, leg.lng)));
              });
            });
            UPCOMING_CRUISES.forEach((upcomingCruise: Array<IPoint>, index: number) => {
              let upcomingCruiseLine: Polyline = this._upcomingCruiseLines[index];
              upcomingCruise.forEach((leg: IPoint) => {
                this._lineDrawWait++;
                delay(this._lineDrawWait * 65).
                then(() => upcomingCruiseLine.getPath().push(new LatLng(leg.lat, leg.lng)));
              });
            });
            this._additionalMarkerWait = AIRPORTS.length + PORTS.length;
            CITIES.forEach((city: ICity, index: number) =>
              delay((index * 650) + this._additionalMarkerWait).
                then(() => this._markerUtil.addCityMarker(this.map, city, this._cityMarkers)));
            this._additionalMarkerWait = this._additionalMarkerWait * 100;
            delay((CITIES.length * 700) + this._additionalMarkerWait).then(() => {
              this.map.panTo(points.WELLINGTON);
              this._mapUtil.zoomMap(this.map, this.map.getZoom() + 1, $(window).width() >= 1000 ? 11 : 10);
            });
          });
        }
      }))(jQuery);
  }
}
