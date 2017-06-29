import Animation = google.maps.Animation;
import event = google.maps.event;
import InfoWindow = google.maps.InfoWindow;
import LatLng = google.maps.LatLng;
import Map = google.maps.Map;
import MapOptions = google.maps.MapOptions;
import Marker = google.maps.Marker;
import Polyline = google.maps.Polyline;
import {Component, OnInit} from '@angular/core';
import {MAP_OPTIONS} from '../models/map.config';
import {CURRENT_LOCATION} from '../models/cities';
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
  styleUrls: [
    './contact.gmap.css',
  ],
  templateUrl: 'contact.gmap.htm',
})
export class ContactMapComponent implements OnInit {
  public map: Map;
  private _additionalMarkerWait: number;
  private _airportMarkerDropWait: number;
  private _cityMarkers: Array<Marker>;
  private _infoWindow: InfoWindow;
  private _journeyLines: Array<Polyline>;
  private _journeyLineDrawWait: number;
  private _mapMarkersDrawn: boolean;
  private _markerBounce: Marker;
  private _markerWait: number;
  private _tilesLoaded: boolean;
  private _tilesLoadedEvent: any;
  private _timeoutMarkerBounce: any;
  private _timeoutScroll: any;
  private _upcomingJourneyLines: Array<Polyline>;

  constructor() {
    this._additionalMarkerWait = 0;
    this._airportMarkerDropWait = 0;
    this._cityMarkers = [];
    this._infoWindow = new InfoWindow();
    this._journeyLines = [];
    this._journeyLineDrawWait = 0;
    this._mapMarkersDrawn = false;
    this._tilesLoaded = false;
    this._upcomingJourneyLines = [];
  }

  ngOnInit() {
    this.initializeMap();
    this.initScrollListener();
    this.initClickListener();
  }

  initializeMap() {
    const MAP_MAX_MOBILE_ZOOM_ZERO: number = 768;
    (($: JQueryStatic) => {
      delay(250)
        .then(() => {
          let mapOptions: MapOptions = Object.assign({}, MAP_OPTIONS);
          if ($(window).width() < MAP_MAX_MOBILE_ZOOM_ZERO) {
            mapOptions.zoom = 1;
            mapOptions.minZoom = 1;
          }
          this.map = new Map(document.getElementById('map-canvas'), mapOptions);
          JOURNEYS.forEach((journey: Array<IAirport>, index: number) => {
            this._journeyLines[index] = new Polyline({
              geodesic: true,
              map: this.map,
              strokeColor: '#1b1f29',
              strokeOpacity: 0.5,
              strokeWeight: 2,
            });
          });
          UPCOMING_JOURNEYS.forEach((upcomingJourney: Array<IAirport>, index: number) => {
            this._upcomingJourneyLines[index] = new Polyline({
              geodesic: true,
              icons: [{
                icon: {path: 'M 0, -1 0,1', strokeOpacity: 0.5, strokeWeight: 2},
                offset: '0',
                repeat: '12px',
              }],
              map: this.map,
              strokeOpacity: 0,
            });
          });
          this._tilesLoadedEvent = event.addListener(this.map, 'tilesloaded', () => {
            event.removeListener(this._tilesLoadedEvent);
            this._tilesLoaded = true;
            this.dropMarkers();
          });
        });
    })(jQuery);
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

  initClickListener() {
    (($: JQueryStatic) => {
      $('#js_click_address').click((e: JQuery.Event) => {
        e.preventDefault();
        if (this._cityMarkers.length === CITIES.length) {
          let cityMarker = this._cityMarkers[this._cityMarkers.length - 1];
          if (cityMarker) {
            this.toggleBounce(cityMarker, CURRENT_LOCATION.name, CURRENT_LOCATION.description);
          }
        }
      });
    })(jQuery);
  }

  dropMarkers(wait: number = 750) {
    this._markerWait = wait;
    (($: JQueryStatic) => {
      $('.js_trigger_map_marker').each((index: number, triggerEl: Element) => {
        if (!this._mapMarkersDrawn && elementInViewport($, <JQuery>$(triggerEl))) {
          if (this._tilesLoaded) {
            this._mapMarkersDrawn = true;
            delay(this._markerWait)
              .then(() => {
                AIRPORTS.forEach((airport: IAirport) => {
                  this._airportMarkerDropWait++;
                  delay(this._airportMarkerDropWait * 135)
                    .then(() => {
                      let marker = new Marker({
                        animation: Animation.DROP,
                        draggable: false,
                        icon: {size: points.AIRPORT_SIZE, url: 'assets/images/markerairport.png'},
                        map: this.map,
                        position: new LatLng(airport.loc.lat, airport.loc.lng),
                        title: `${airport.iataCode} // ${airport.name}`,
                        zIndex: 100,
                      });
                      event.addListener(marker, 'click', () => {
                        this.toggleBounce(marker, airport.iataCode, `${airport.name}<br>${airport.city}, ${airport.country}`);
                      });
                    });
                });
                JOURNEYS.forEach((journey: Array<IAirport>, index: number) => {
                  let journeyLine: Polyline = this._journeyLines[index];
                  journey.forEach((leg: IAirport) => {
                    this._journeyLineDrawWait++;
                    delay(this._journeyLineDrawWait * 65)
                      .then(() => {
                        journeyLine.getPath().push(new LatLng(leg.loc.lat, leg.loc.lng));
                      });
                  });
                });
                UPCOMING_JOURNEYS.forEach((journey: Array<IAirport>, index: number) => {
                  let upcomingJourneyLine: Polyline = this._upcomingJourneyLines[index];
                  journey.forEach((leg: IAirport) => {
                    this._journeyLineDrawWait++;
                    delay(this._journeyLineDrawWait * 65)
                      .then(() => {
                        upcomingJourneyLine.getPath().push(new LatLng(leg.loc.lat, leg.loc.lng));
                      });
                  });
                });
                this._additionalMarkerWait = ((AIRPORTS.length - 1) * 100);
                CITIES.forEach((city: ICity, index: number) => {
                  delay((index * 650) + this._additionalMarkerWait)
                    .then(() => {
                      this.addMarker(city);
                    });
                });
                delay(((CITIES.length) * 700) + this._additionalMarkerWait)
                  .then(() => {
                    this.map.panTo(points.WELLINGTON);
                    this.zoomMap(this.map.getZoom() + 1, $(window).width() >= 1000 ? 11 : 10);
                  });
              });
          }
        }
      });
    })(jQuery);
  }

  addMarker(city: ICity) {
    let cityMarker: Marker = new Marker({
      animation: Animation.DROP,
      draggable: false,
      icon: city.icon,
      map: this.map,
      position: new LatLng(city.loc.lat, city.loc.lng),
      title: city.name,
      zIndex: 200,
    });
    this._cityMarkers.push(cityMarker);
    event.addListener(cityMarker, 'click', () => {
      this.toggleBounce(cityMarker, city.name, city.description);
    });
  }

  zoomMap(nextZoomLevel: number = 0, maxZoom: number = 0) {
    if (nextZoomLevel < maxZoom) {
      this._tilesLoadedEvent = event.addListener(this.map, 'tilesloaded', () => {
        event.removeListener(this._tilesLoadedEvent);
        this.zoomMap(this.map.getZoom() + 1, maxZoom);
      });
      delay(280)
        .then(() => {
          this.map.setZoom(nextZoomLevel);
        });
    } else {
      this.map.setOptions({
        scrollwheel: true,
      });
    }
  }

  toggleBounce(marker: Marker, infoTitle: string, infoContent: string) {
    if (this._timeoutMarkerBounce) {
      clearTimeout(this._timeoutMarkerBounce);
      if (this._markerBounce) {
        this._markerBounce.setAnimation(null);
      }
    }
    this._markerBounce = marker;
    this._markerBounce.setAnimation(Animation.BOUNCE);
    this._infoWindow.close();
    this._infoWindow.setContent(`<div class="map-info-window"><h3>${infoTitle}</h3><p>${infoContent}</p></div>`);
    this._infoWindow.open(this.map, this._markerBounce);
    this._timeoutMarkerBounce = cancelableDelay(2000, () => {
      this._markerBounce.setAnimation(null);
      this._markerBounce = null;
    });
  }
}
