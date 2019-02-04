import {IStation, Station} from '../definitions/station';
import {Point} from '../definitions/point';
import * as countries from './countries';

export const KGX: IStation = new Station('London', countries.UK, 'KGX', new Point(51.531955, -0.1278926), `London King's Cross`);
export const EDB: IStation = new Station('Edinburgh', countries.SCOTLAND, 'EDB', new Point(55.9520009, -3.1921642), 'Edinburgh Waverley');
export const VIC: IStation = new Station('London', countries.UK, 'VIC', new Point(51.4965454, -0.1458115), 'London Victoria');
export const BTN: IStation = new Station('Brighton', countries.UK, 'BTN', new Point(50.8294648, -0.1431493), 'Brighton');
export const EBN: IStation = new Station('Eastbourne', countries.UK, 'EBN', new Point(50.7697703, 0.2809062), 'Eastbourne');
export const HGS: IStation = new Station('Hastings', countries.UK, 'HGS', new Point(50.8582168, 0.5756741), 'Hastings');
export const CST: IStation = new Station('London', countries.UK, 'CST', new Point(51.5112258, -0.0913003), 'London Cannon Street');
export const ZHB: IStation = new Station('Zürich', countries.SWITZERLAND, 'ZHB', new Point(47.3784045, 8.5362146), 'Zürich Hauptbahnhof');
export const BHB: IStation = new Station('Bern', countries.SWITZERLAND, 'BHB', new Point(46.9485679, 7.4344308), 'Bahnhof Bern');
export const GDB: IStation = new Station('Grindelwald', countries.SWITZERLAND, 'GDB', new Point(46.6242674, 8.0336964), 'Bahnhof Grindelwald');
export const CHB: IStation = new Station('Chiasso', countries.SWITZERLAND, 'CHB', new Point(45.8310028, 9.0310524), 'Stazione di Chiasso');
export const WELL: IStation = new Station('Wellington', countries.NEW_ZEALAND, 'WELL', new Point(-41.279217, 174.780331), 'Wellington Station');
export const HAM: IStation = new Station('Hamilton', countries.NEW_ZEALAND, 'HAM', new Point(-37.790919, 175.265010), 'Hamilton Station');
export const CHCH: IStation = new Station('Christchurch', countries.NEW_ZEALAND, 'CHCH', new Point(-43.539931, 172.607988), 'Christchurch Station');
export const PICT: IStation = new Station('Picton', countries.NEW_ZEALAND, 'PICT', new Point(-41.288347, 174.004794), 'Picton Station');
export const XEV: IStation = new Station('Stockholm', countries.SWEDEN, 'XEV', new Point(59.330638, 18.057947), 'Stockholm Central Station');
export const ZGH: IStation = new Station('Copenhagen', countries.DENMARK, 'ZGH', new Point(55.672667, 12.564894), 'Copenhagen Central Station');
export const XZO: IStation = new Station('Oslo', countries.NORWAY, 'XZO', new Point(59.910146, 10.755197), 'Oslo Central Station');
export const QFV: IStation = new Station('Bergen', countries.NORWAY, 'QFV', new Point(60.390254, 5.333838), 'Bergen Railway Station');
export const XZT: IStation = new Station('Trondheim', countries.NORWAY, 'XZT', new Point(63.436651, 10.398618), 'Trondheim Central Station');
export const BOO: IStation = new Station('Bodø', countries.NORWAY, 'BOO', new Point(67.286444, 14.391597), 'Bodø Station');

/**
 * Array of all ports for the Contact section
 * @type {IStation[]}
 */
export const STATIONS: Array<IStation> = [
  KGX, EDB, VIC, BTN, EBN, HGS, CST, ZHB, BHB, GDB, CHB, WELL, HAM, CHCH, PICT, XEV, ZGH, XZO, QFV, XZT, BOO,
];
