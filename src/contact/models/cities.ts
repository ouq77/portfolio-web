import {ICity, City} from '../definitions/city';
import {IIcon, Icon} from '../definitions/icon';
import * as points from './points';

let lived: string = 'I\'ve lived here...';
let prevIcon: IIcon = new Icon(points.MARKER_SIZE, 'assets/images/markerprev.png');
let curIcon: IIcon = new Icon(points.MARKER_SIZE, 'assets/images/markercur.png');

const HARTSWATER: ICity = new City('I was born here...', prevIcon, points.HARTSWATER, 'Hartswater, South Africa');
const HEIDELBERG: ICity = new City('I grew up here...', prevIcon, points.HEIDELBERG, 'Heidelberg, South Africa');
const VRYBURG: ICity = new City('I went to High School here...', prevIcon, points.VRYBURG, 'Vryburg, South Africa');
const LONDON: ICity = new City(lived, prevIcon, points.LONDON, 'London, United Kingdom');
const JOHANNESBURG: ICity = new City(lived, prevIcon, points.BENONI, 'Johannesburg, South Africa');
const CAPE_TOWN: ICity = new City('I moved to NZ from here...', prevIcon, points.CAPE_TOWN, 'Cape Town, South Africa');
const HAMILTON: ICity = new City(lived, prevIcon, points.HAMILTON, 'Hamilton, New Zealand');
const AUCKLAND: ICity = new City(lived, prevIcon, points.AUCKLAND, 'Auckland, New Zealand');
const BROOKLYN: ICity = new City('I currently live in this area...', curIcon, points.BROOKLYN, 'Brooklyn, Wellington, New Zealand');

export const CURRENT_LOCATION = BROOKLYN;

/**
 * Array of Cities for the Contact section
 * @type {ICity[]}
 */
export const CITIES: Array<ICity> = [
  HARTSWATER, HEIDELBERG, VRYBURG, LONDON, JOHANNESBURG, CAPE_TOWN, HAMILTON, AUCKLAND, BROOKLYN,
];
