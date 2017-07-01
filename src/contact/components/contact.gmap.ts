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
import {JOURNEYS, UPCOMING_JOURNEYS} from '../models/journeys';
import * as points from '../models/points';
import {ICity} from '../definitions/city';
import {IAirport} from '../definitions/airport';
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
  private _airportMarkerDropWait: number;
  private _cityMarkers: Array<Marker>;
  private _journeyLines: Array<Polyline>;
  private _journeyLineDrawWait: number;
  private _mapMarkersDrawn: boolean;
  private _mapUtil: MapUtil;
  private _markerUtil: MarkerUtil;
  private _markerWait: number;
  private _tilesLoaded: boolean;
  private _tilesLoadedEvent: any;
  private _timeoutScroll: any;
  private _upcomingJourneyLines: Array<Polyline>;

  constructor() {
    this._additionalMarkerWait = 0;
    this._airportMarkerDropWait = 0;
    this._cityMarkers = [];
    this._journeyLines = [];
    this._journeyLineDrawWait = 0;
    this._mapMarkersDrawn = false;
    this._mapUtil = new MapUtil();
    this._markerUtil = new MarkerUtil();
    this._tilesLoaded = false;
    this._upcomingJourneyLines = [];
  }

  ngOnInit() {
    this.initializeMap();
    this.initScrollListener();
    this._markerUtil.initClickListener(this.map, this._cityMarkers);
  }

  initializeMap() {
    const MAP_MAX_MOBILE_ZOOM_ZERO: number = 768;
    (($: JQueryStatic) =>
      delay(250)
        .then(() => {
          let mapOptions: MapOptions = Object.assign({}, MAP_OPTIONS);
          if ($(window).width() < MAP_MAX_MOBILE_ZOOM_ZERO) {
            mapOptions.zoom = 1;
            mapOptions.minZoom = 1;
          }
          this.map = new Map(document.getElementById('map-canvas'), mapOptions);
          JOURNEYS.forEach((journey: Array<IAirport>, index: number) =>
            this._journeyLines[index] = new Polyline({
              geodesic: true, map: this.map, strokeColor: '#1b1f29', strokeOpacity: 0.5, strokeWeight: 2,
            }));
          UPCOMING_JOURNEYS.forEach((upcomingJourney: Array<IAirport>, index: number) =>
            this._upcomingJourneyLines[index] = new Polyline({
              geodesic: true,
              icons: [{icon: {path: 'M 0, -1 0,1', strokeOpacity: 0.5, strokeWeight: 2}, offset: '0', repeat: '12px'}],
              map: this.map,
              strokeOpacity: 0,
            }));
          this._tilesLoadedEvent = event.addListener(this.map, 'tilesloaded', () => {
            event.removeListener(this._tilesLoadedEvent);
            this._tilesLoaded = true;
            this.dropMarkers();
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
            this.dropMarkers(500);
          }
        });
      });
    })(jQuery);
  }

  dropMarkers(wait: number = 750) {
    this._markerWait = wait;
    (($: JQueryStatic) =>
      $('.js_trigger_map_marker').each((index: number, triggerEl: Element) => {
        if (!this._mapMarkersDrawn && elementInViewport($, <JQuery>$(triggerEl)) && this._tilesLoaded) {
          this._mapMarkersDrawn = true;
          delay(this._markerWait)
            .then(() => {
              AIRPORTS.forEach((airport: IAirport) => {
                this._airportMarkerDropWait++;
                delay(this._airportMarkerDropWait * 135)
                  .then(() => this._markerUtil.addAirportMarker(this.map, airport));
              });
              JOURNEYS.forEach((journey: Array<IAirport>, index: number) => {
                let journeyLine: Polyline = this._journeyLines[index];
                journey.forEach((leg: IAirport) => {
                  this._journeyLineDrawWait++;
                  delay(this._journeyLineDrawWait * 65)
                    .then(() => journeyLine.getPath().push(new LatLng(leg.loc.lat, leg.loc.lng)));
                });
              });
              UPCOMING_JOURNEYS.forEach((journey: Array<IAirport>, index: number) => {
                let upcomingJourneyLine: Polyline = this._upcomingJourneyLines[index];
                journey.forEach((leg: IAirport) => {
                  this._journeyLineDrawWait++;
                  delay(this._journeyLineDrawWait * 65)
                    .then(() => upcomingJourneyLine.getPath().push(new LatLng(leg.loc.lat, leg.loc.lng)));
                });
              });
              this._additionalMarkerWait = ((AIRPORTS.length - 1) * 100);
              CITIES.forEach((city: ICity, index: number) =>
                delay((index * 650) + this._additionalMarkerWait)
                  .then(() => this._markerUtil.addCityMarker(this.map, city, this._cityMarkers)));
              delay(((CITIES.length) * 700) + this._additionalMarkerWait)
                .then(() => {
                  this.map.panTo(points.WELLINGTON);
                  this._mapUtil.zoomMap(this.map, this.map.getZoom() + 1, $(window).width() >= 1000 ? 11 : 10);
                });
            });
        }
      }))(jQuery);
  }
}
