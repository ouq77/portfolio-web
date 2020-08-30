import { Station } from '../definitions/station'
import { DENMARK, NEW_ZEALAND, NORWAY, SCOTLAND, SWEDEN, SWITZERLAND, UK } from './countries'

export const MYB: Station = { city: 'London', country: UK, stationCode: 'MYB', loc: { lat: 51.522617, lng: -0.162974 }, name: 'London Marylebone' }
export const AYS: Station = { city: 'Aylesbury', country: UK, stationCode: 'AYS', loc: { lat: 51.813675, lng: -0.814787 }, name: 'Aylesbury Station' }
export const KGX: Station = { city: 'London', country: UK, stationCode: 'KGX', loc: { lat: 51.531433, lng: -0.124240 }, name: `London King's Cross` }
export const EDB: Station = { city: 'Edinburgh', country: SCOTLAND, stationCode: 'EDB', loc: { lat: 55.951842, lng: -3.190356 }, name: 'Edinburgh Waverley' }
export const VIC: Station = { city: 'London', country: UK, stationCode: 'VIC', loc: { lat: 51.4952111, lng: -0.1440114 }, name: 'London Victoria' }
export const BTN: Station = { city: 'Brighton', country: UK, stationCode: 'BTN', loc: { lat: 50.829485, lng: -0.141036 }, name: 'Brighton Station' }
export const EBN: Station = { city: 'Eastbourne', country: UK, stationCode: 'EBN', loc: { lat: 50.769411, lng: 0.281219 }, name: 'Eastbourne Station' }
export const HGS: Station = { city: 'Hastings', country: UK, stationCode: 'HGS', loc: { lat: 50.858226, lng: 0.577018 }, name: 'Hastings Station' }
export const CST: Station = { city: 'London', country: UK, stationCode: 'CST', loc: { lat: 51.511275, lng: -0.090282 }, name: 'London Cannon Street' }
export const BAN: Station = { city: 'Banbury', country: UK, stationCode: 'BAN', loc: { lat: 52.060644, lng: -1.327897 }, name: 'Banbury Station' }
export const WAT: Station = { city: 'London', country: UK, stationCode: 'WAT', loc: { lat: 51.503106, lng: -0.112390 }, name: 'London Waterloo' }
export const GLD: Station = { city: 'Guildford', country: UK, stationCode: 'GLD', loc: { lat: 51.236765, lng: -0.580707 }, name: 'Guildford Station' }
export const PAD: Station = { city: 'London', country: UK, stationCode: 'PAD', loc: { lat: 51.516609, lng: -0.176839 }, name: 'London Paddington' }
export const WNR: Station = { city: 'Windsor', country: UK, stationCode: 'WNR', loc: { lat: 51.485719, lng: -0.606355 }, name: 'Windsor and Eton Riverside Station' }
export const RDG: Station = { city: 'Reading', country: UK, stationCode: 'RDG', loc: { lat: 51.459205, lng: -0.972766 }, name: 'Reading Station' }
export const BCE: Station = { city: 'Bracknell', country: UK, stationCode: 'BCE', loc: { lat: 51.413027, lng: -0.752136 }, name: 'Bracknell Station' }
export const PME: Station = { city: 'Portsmouth', country: UK, stationCode: 'PME', loc: { lat: 50.796958, lng: -1.107896 }, name: 'Portsmouth Harbour Station Pier' }
export const ZHB: Station = { city: 'Zürich', country: SWITZERLAND, stationCode: 'ZHB', loc: { lat: 47.378375, lng: 8.538908 }, name: 'Zürich Hauptbahnhof' }
export const BHB: Station = { city: 'Bern', country: SWITZERLAND, stationCode: 'BHB', loc: { lat: 46.948348, lng: 7.436341 }, name: 'Bahnhof Bern' }
export const GDB: Station = { city: 'Grindelwald', country: SWITZERLAND, stationCode: 'GDB', loc: { lat: 46.624451, lng: 8.033323 }, name: 'Bahnhof Grindelwald' }
export const CHB: Station = { city: 'Chiasso', country: SWITZERLAND, stationCode: 'CHB', loc: { lat: 45.831830, lng: 9.031275 }, name: 'Stazione di Chiasso' }
export const WEL: Station = { city: 'Wellington', country: NEW_ZEALAND, stationCode: 'WELL', loc: { lat: -41.279217, lng: 174.780331 }, name: 'Wellington Station' }
export const HAM: Station = { city: 'Hamilton', country: NEW_ZEALAND, stationCode: 'HAM', loc: { lat: -37.790919, lng: 175.265010 }, name: 'Hamilton Station' }
export const CHC: Station = { city: 'Christchurch', country: NEW_ZEALAND, stationCode: 'CHCH', loc: { lat: -43.539931, lng: 172.607988 }, name: 'Christchurch Station' }
export const PIC: Station = { city: 'Picton', country: NEW_ZEALAND, stationCode: 'PICT', loc: { lat: -41.288347, lng: 174.004794 }, name: 'Picton Station' }
export const XEV: Station = { city: 'Stockholm', country: SWEDEN, stationCode: 'XEV', loc: { lat: 59.330616, lng: 18.056583 }, name: 'Stockholm Central Station' }
export const ZGH: Station = { city: 'Copenhagen', country: DENMARK, stationCode: 'ZGH', loc: { lat: 55.672667, lng: 12.564894 }, name: 'Copenhagen Central Station' }
export const XZO: Station = { city: 'Oslo', country: NORWAY, stationCode: 'XZO', loc: { lat: 59.910146, lng: 10.755197 }, name: 'Oslo Central Station' }
export const QFV: Station = { city: 'Bergen', country: NORWAY, stationCode: 'QFV', loc: { lat: 60.390254, lng: 5.333838 }, name: 'Bergen Railway Station' }
export const XZT: Station = { city: 'Trondheim', country: NORWAY, stationCode: 'XZT', loc: { lat: 63.436651, lng: 10.398618 }, name: 'Trondheim Central Station' }
export const BOO: Station = { city: 'Bodø', country: NORWAY, stationCode: 'BOO', loc: { lat: 67.286444, lng: 14.391597 }, name: 'Bodø Station' }

/**
 * Array of all ports for the Contact section
 */
export const STATIONS: Array<Station> = [
  MYB, AYS, KGX, EDB, VIC, BTN, EBN, HGS, CST, BAN, WAT, GLD, PAD, WNR, RDG, BCE, PME, ZHB, BHB, GDB, CHB,
  WEL, HAM, CHC, PIC, XEV, ZGH, XZO, QFV, XZT, BOO,
]
