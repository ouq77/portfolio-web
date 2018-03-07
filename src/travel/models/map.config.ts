import MapOptions = google.maps.MapOptions;
import {START_POINT} from './points';

/**
 * Configuration for the Map in the Contact section
 * @type {MapOptions}
 */
export const MAP_OPTIONS: MapOptions = {
  center: START_POINT,
  minZoom: 2,
  scrollwheel: false,
  styles: [
    {
      elementType: 'geometry',
      featureType: 'water',
      stylers: [{color: '#00bdbd'}],
    }, {
      elementType: 'geometry',
      featureType: 'landscape.man_made',
      stylers: [{color: '#f7f1df'}],
    }, {
      elementType: 'geometry',
      featureType: 'landscape.natural',
      stylers: [{color: '#bde6ab'}],
    }, {
      elementType: 'geometry',
      featureType: 'landscape.natural.terrain',
      stylers: [{visibility: 'off'}],
    }, {
      elementType: 'geometry',
      featureType: 'poi.park',
      stylers: [{color: '#abce83'}],
    }, {
      elementType: 'labels',
      featureType: 'poi',
      stylers: [{visibility: 'off'}],
    }, {
      elementType: 'geometry',
      featureType: 'poi.medical',
      stylers: [{color: '#fbd3da'}],
    }, {
      featureType: 'poi.business',
      stylers: [{visibility: 'off'}],
    }, {
      elementType: 'geometry.stroke',
      featureType: 'road',
      stylers: [{visibility: 'off'}],
    }, {
      elementType: 'labels',
      featureType: 'road',
      stylers: [{visibility: 'off'}],
    }, {
      elementType: 'geometry.fill',
      featureType: 'road.highway',
      stylers: [{color: '#f5534b'}],
    }, {
      elementType: 'geometry.stroke',
      featureType: 'road.highway',
      stylers: [{color: '#f5534b'}],
    }, {
      elementType: 'geometry.fill',
      featureType: 'road.arterial',
      stylers: [{color: '#ff675f'}],
    }, {
      elementType: 'geometry.fill',
      featureType: 'road.local',
      stylers: [{color: 'black'}],
    }, {
      elementType: 'geometry.fill',
      featureType: 'transit.station.airport',
      stylers: [{color: '#cfb2db'}],
    }, {
      elementType: 'geometry.fill',
      featureType: 'transit.line',
      stylers: [{color: '#474d5d'}],
    }, {
      elementType: 'geometry.stroke',
      featureType: 'transit.line',
      stylers: [{color: '#474d5d'}],
    },
  ],
  zoom: 2,
};
