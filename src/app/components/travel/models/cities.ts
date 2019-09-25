import { City } from '../definitions/city'
import { Icon } from '../definitions/icon'
import { NEW_ZEALAND, SOUTH_AFRICA, UK } from './countries'
import { CURRENT_ICON_URL, PREVIOUS_ICON_URL } from './marker.icons'
import { CURRENT_MARKER_SIZE, PREVIOUS_MARKER_SIZE } from './marker.sizes'
import { AUCKLAND_POINT, BENONI_POINT, CAPE_TOWN_POINT, HAMILTON_POINT, HARTSWATER_POINT, HEIDELBERG_POINT, LONDON_POINT, SILVERSTREAM_POINT, VRYBURG_POINT } from './points'

const lived = 'I\'ve lived here...'
const prevIcon: Icon = { scaledSize: PREVIOUS_MARKER_SIZE, url: PREVIOUS_ICON_URL }
const curIcon: Icon = { scaledSize: CURRENT_MARKER_SIZE, url: CURRENT_ICON_URL }

const HARTSWATER: City = { description: 'I was born here...', icon: prevIcon, loc: HARTSWATER_POINT, name: `Hartswater, ${SOUTH_AFRICA}` }
const HEIDELBERG: City = { description: 'I grew up here...', icon: prevIcon, loc: HEIDELBERG_POINT, name: `Heidelberg, ${SOUTH_AFRICA}` }
const VRYBURG: City = { description: 'I went to High School here...', icon: prevIcon, loc: VRYBURG_POINT, name: `Vryburg, ${SOUTH_AFRICA}` }
const LONDON: City = { description: lived, icon: prevIcon, loc: LONDON_POINT, name: `London, ${UK}` }
const JOHANNESBURG: City = { description: lived, icon: prevIcon, loc: BENONI_POINT, name: `Johannesburg, ${SOUTH_AFRICA}` }
const CAPE_TOWN: City = { description: 'I moved to NZ from here...', icon: prevIcon, loc: CAPE_TOWN_POINT, name: `Cape Town, ${SOUTH_AFRICA}` }
const HAMILTON: City = { description: lived, icon: prevIcon, loc: HAMILTON_POINT, name: `Hamilton, ${NEW_ZEALAND}` }
const AUCKLAND: City = { description: lived, icon: prevIcon, loc: AUCKLAND_POINT, name: `Auckland, ${NEW_ZEALAND}` }
const SILVERSTREAM: City = { description: 'I currently live in this area...', icon: curIcon, loc: SILVERSTREAM_POINT, name: `Silverstream, Wellington, ${NEW_ZEALAND}`, current: true }

/**
 * Array of Cities for the Contact section
 */
export const CITIES: Array<City> = [
  HARTSWATER, HEIDELBERG, VRYBURG, LONDON, JOHANNESBURG, CAPE_TOWN, HAMILTON, AUCKLAND, SILVERSTREAM,
]
