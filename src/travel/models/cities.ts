import {CURRENT_ICON_URL, PREVIOUS_ICON_URL} from './marker.icons';
import {CURRENT_MARKER_SIZE, PREVIOUS_MARKER_SIZE} from './marker.sizes';
import {ICity, City} from '../definitions/city';
import {IIcon, Icon} from '../definitions/icon';
import {NEW_ZEALAND, SOUTH_AFRICA, UK} from './countries';
import {AUCKLAND_POINT, BENONI_POINT, CAPE_TOWN_POINT, HAMILTON_POINT, HARTSWATER_POINT, HEIDELBERG_POINT,
  LONDON_POINT, SILVERSTREAM_POINT, VRYBURG_POINT} from './points';

let lived: string = 'I\'ve lived here...';
let prevIcon: IIcon = new Icon(PREVIOUS_MARKER_SIZE, PREVIOUS_ICON_URL);
let curIcon: IIcon = new Icon(CURRENT_MARKER_SIZE, CURRENT_ICON_URL);

const HARTSWATER: ICity = new City('I was born here...', prevIcon, HARTSWATER_POINT, `Hartswater, ${SOUTH_AFRICA}`);
const HEIDELBERG: ICity = new City('I grew up here...', prevIcon, HEIDELBERG_POINT, `Heidelberg, ${SOUTH_AFRICA}`);
const VRYBURG: ICity = new City('I went to High School here...', prevIcon, VRYBURG_POINT, `Vryburg, ${SOUTH_AFRICA}`);
const LONDON: ICity = new City(lived, prevIcon, LONDON_POINT, `London, ${UK}`);
const JOHANNESBURG: ICity = new City(lived, prevIcon, BENONI_POINT, `Johannesburg, ${SOUTH_AFRICA}`);
const CAPE_TOWN: ICity = new City('I moved to NZ from here...', prevIcon, CAPE_TOWN_POINT, `Cape Town, ${SOUTH_AFRICA}`);
const HAMILTON: ICity = new City(lived, prevIcon, HAMILTON_POINT, `Hamilton, ${NEW_ZEALAND}`);
const AUCKLAND: ICity = new City(lived, prevIcon, AUCKLAND_POINT, `Auckland, ${NEW_ZEALAND}`);
const SILVERSTREAM: ICity = new City('I currently live in this area...', curIcon, SILVERSTREAM_POINT, `Silverstream, Wellington, ${NEW_ZEALAND}`, true);

/**
 * Array of Cities for the Contact section
 * @type {ICity[]}
 */
export const CITIES: Array<ICity> = [
  HARTSWATER, HEIDELBERG, VRYBURG, LONDON, JOHANNESBURG, CAPE_TOWN, HAMILTON, AUCKLAND, SILVERSTREAM,
];
