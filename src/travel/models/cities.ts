import {ICity, City} from '../definitions/city';
import {IIcon, Icon} from '../definitions/icon';
import * as points from './points';
import * as countries from './countries';

let lived: string = 'I\'ve lived here...';
let prevIcon: IIcon = new Icon(points.MARKER_SIZE, 'assets/images/markerprev.png');
let curIcon: IIcon = new Icon(points.MARKER_SIZE, 'assets/images/markercur.png');

const HARTSWATER: ICity = new City('I was born here...', prevIcon, points.HARTSWATER, `Hartswater, ${countries.SOUTH_AFRICA}`);
const HEIDELBERG: ICity = new City('I grew up here...', prevIcon, points.HEIDELBERG, `Heidelberg, ${countries.SOUTH_AFRICA}`);
const VRYBURG: ICity = new City('I went to High School here...', prevIcon, points.VRYBURG, `Vryburg, ${countries.SOUTH_AFRICA}`);
const LONDON: ICity = new City(lived, prevIcon, points.LONDON, `London, ${countries.UK}`);
const JOHANNESBURG: ICity = new City(lived, prevIcon, points.BENONI, `Johannesburg, ${countries.SOUTH_AFRICA}`);
const CAPE_TOWN: ICity = new City('I moved to NZ from here...', prevIcon, points.CAPE_TOWN, `Cape Town, ${countries.SOUTH_AFRICA}`);
const HAMILTON: ICity = new City(lived, prevIcon, points.HAMILTON, `Hamilton, ${countries.NEW_ZEALAND}`);
const AUCKLAND: ICity = new City(lived, prevIcon, points.AUCKLAND, `Auckland, ${countries.NEW_ZEALAND}`);
const SILVERSTREAM: ICity = new City('I currently live in this area...', curIcon, points.SILVERSTREAM, `Silverstream, Wellington, ${countries.NEW_ZEALAND}`);

export const CURRENT_LOCATION = SILVERSTREAM;

/**
 * Array of Cities for the Contact section
 * @type {ICity[]}
 */
export const CITIES: Array<ICity> = [
  HARTSWATER, HEIDELBERG, VRYBURG, LONDON, JOHANNESBURG, CAPE_TOWN, HAMILTON, AUCKLAND, SILVERSTREAM,
];
