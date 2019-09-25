import {Component, OnInit} from '@angular/core'
import { cancelableDelay, delay } from '../../shared/common/delay'
import { Airport } from '../definitions/airport'
import { City } from '../definitions/city'
import { Port } from '../definitions/port'
import { RailTrip, RailTrips } from '../definitions/rail.trips'
import { Station } from '../definitions/station'
import { AIRPORTS } from '../models/airports'
import { CITIES } from '../models/cities'
import { CRUISES, UPCOMING_CRUISES } from '../models/cruises'
import { FLIGHTS, UPCOMING_FLIGHTS } from '../models/flights'
import { MAP_OPTIONS } from '../models/map.config'
import { AUCKLAND_POINT } from '../models/points'
import { PORTS } from '../models/ports'
import { STATIONS } from '../models/stations'
import { TravelService } from '../service/travel'
import { MapUtil } from './gmap/map.util'
import { MarkerUtil } from './gmap/marker.util'
import { PolylineUtil } from './gmap/polyline.util'

@Component({
  selector: 'app-googlemap',
  styleUrls: ['./travel.gmap.scss'],
  templateUrl: 'travel.gmap.html',
})
export class TravelMapComponent implements OnInit {
  public map: google.maps.Map
  private _additionalMarkerWait = 0
  private _markerDropWait = 0
  private _cityMarkers: Array<google.maps.Marker> = []
  private _cruiseLines: Array<google.maps.Polyline> = []
  private _flightLines: Array<google.maps.Polyline> = []
  private _railPaths: Array<string> = []
  private _mapMarkersDrawn = false
  private _mapUtil: MapUtil = new MapUtil()
  private _markerUtil: MarkerUtil = new MarkerUtil()
  private _polylineUtil: PolylineUtil = new PolylineUtil()
  private _upcomingCruiseLines: Array<google.maps.Polyline> = []
  private _upcomingFlightLines: Array<google.maps.Polyline> = []
  private _upcomingRailPaths: Array<string> = []
  private _railPathsLoaded = false
  private _mapInitialized = false
  private _tilesLoadedEvent: any
  private _timeoutScroll: any

  constructor(private _travelService: TravelService) {
  }

  ngOnInit(): void {
    this.initRailTripPaths()
    this.initScrollListener()
  }

  initRailTripPaths(): void {
    this._travelService.getRailTripPaths().subscribe(
      (resp: RailTrips) => {
        this._railPaths = resp.railTrips.map((railTrip: RailTrip) => railTrip.path)
        this._upcomingRailPaths = resp.upcomingRailTrips.map((railTrip: RailTrip) => railTrip.path)
        this._railPathsLoaded = true
      },
      () => console.warn('railTripPaths not returned'),
    )
  }

  initScrollListener(): void {
    (($: JQueryStatic) => {
      $(document).on('scroll', () => {
        // wait half a second for scroll to stop
        if (this._timeoutScroll) {
          clearTimeout(this._timeoutScroll)
        }
        this._timeoutScroll = cancelableDelay(250, () => {
          if (!this._mapInitialized && document.getElementById('map-canvas') !== null) {
            this.initializeMap()
          }
        })
      })
    })(jQuery)
  }

  initializeMap(): void {
    const MAP_MAX_MOBILE_ZOOM_ZERO = 768
    this._mapInitialized = true;
    (($: JQueryStatic) =>
      delay(250).then(() => {
        const mapOptions: google.maps.MapOptions = Object.assign({}, MAP_OPTIONS)
        if ($(window).width() < MAP_MAX_MOBILE_ZOOM_ZERO) {
          mapOptions.zoom = 1
          mapOptions.minZoom = 1
        }
        this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)
        this._flightLines = this._polylineUtil.createPolylines(FLIGHTS, this.map, '#494c54')
        this._upcomingFlightLines = this._polylineUtil.createDottedPolylines(UPCOMING_FLIGHTS, this.map, '#494c54')
        this._cruiseLines = this._polylineUtil.createPolylines(CRUISES, this.map, '#00739c')
        this._upcomingCruiseLines = this._polylineUtil.createDottedPolylines(UPCOMING_CRUISES, this.map, '#00739c')
        this._tilesLoadedEvent = google.maps.event.addListener(this.map, 'tilesloaded', () => {
          google.maps.event.removeListener(this._tilesLoadedEvent)
          this.dropMarkersDrawLines()
        })
      }))(jQuery)
  }

  canDropMarkersDrawLines(): boolean {
    return !this._mapMarkersDrawn && this._railPathsLoaded
  }

  dropMarkersDrawLines(wait: number = 750): void {
    if (this.canDropMarkersDrawLines()) {
      this._mapMarkersDrawn = true
      delay(wait).then(() => {
        AIRPORTS.forEach((airport: Airport) => {
          delay(++this._markerDropWait * 135)
            .then(() => this._markerUtil.addAirportMarker(this.map, airport))
        })
        PORTS.forEach((port: Port) => {
          delay(++this._markerDropWait * 135)
            .then(() => this._markerUtil.addPortMarker(this.map, port))
        })
        STATIONS.forEach((station: Station) => {
          delay(++this._markerDropWait * 135)
            .then(() => this._markerUtil.addStationMarker(this.map, station))
        })
        this._polylineUtil.pushToPolylines(this._flightLines, FLIGHTS)
        this._polylineUtil.pushToPolylines(this._upcomingFlightLines, UPCOMING_FLIGHTS)
        this._polylineUtil.pushToPolylines(this._cruiseLines, CRUISES)
        this._polylineUtil.pushToPolylines(this._upcomingCruiseLines, UPCOMING_CRUISES)
        this._polylineUtil.createPolylineFromPath(this._railPaths, this.map, '#ac3333')
        this._polylineUtil.createDottedPolylineFromPath(this._upcomingRailPaths, this.map, '#ac3333')

        this._additionalMarkerWait = AIRPORTS.length + PORTS.length
        CITIES.forEach((city: City, _index: number) =>
          delay((_index * 650) + this._additionalMarkerWait)
            .then(() => this._markerUtil.addCityMarker(this.map, city, this._cityMarkers)))
        this._additionalMarkerWait = this._additionalMarkerWait * 65
        delay((CITIES.length * 700) + this._additionalMarkerWait).then(() => {
          this.map.panTo(AUCKLAND_POINT)
          this._mapUtil.zoomMap(this.map, this.map.getZoom() + 1, 5)
        })
        this._polylineUtil.setZoomChangedListener(this.map)
        this._markerUtil.setZoomChangedListener(this.map)
      })
    }
  }
}
