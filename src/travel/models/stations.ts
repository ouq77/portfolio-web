import {IStation, Station} from '../definitions/station';
import {Point} from '../definitions/point';
import * as countries from './countries';

export const WELL: IStation = new Station('Wellington', countries.NEW_ZEALAND, 'WELL', new Point(-41.278875, 174.780514), 'Wellington Station');
export const HAM: IStation = new Station('Hamilton', countries.NEW_ZEALAND, 'HAM', new Point(-37.7909057, 175.2629963), 'Hamilton Station');
export const CHCH: IStation = new Station('Christchurch', countries.NEW_ZEALAND, 'CHCH', new Point(-43.5399544, 172.6057528), 'Christchurch Station');
export const PICT: IStation = new Station('Picton', countries.NEW_ZEALAND, 'PICT', new Point(-41.2883406, 174.0026052), 'Picton Station');
export const XEV: IStation = new Station('Stockholm', countries.SWEDEN, 'XEV', new Point(59.330960, 18.056955), 'Stockholm Central Station');
export const ZGH: IStation = new Station('Copenhagen', countries.DENMARK, 'ZGH', new Point(55.672692,12.5626805), 'Copenhagen Central Station');
export const XZO: IStation = new Station('Oslo', countries.NORWAY, 'XZO', new Point(59.9110987,10.7502687), 'Oslo Central Station');
export const QFV: IStation = new Station('Bergen', countries.NORWAY, 'QFV', new Point(60.3898326,5.3323112), 'Bergen Railway Station');
export const XZT: IStation = new Station('Trondheim', countries.NORWAY, 'XZT', new Point(63.436730, 10.399331), 'Trondheim Central Station');
export const BOO: IStation = new Station('Bodø', countries.NORWAY, 'BOO', new Point(67.286483, 14.391948), 'Bodø Station');

/**
 * Array of all ports for the Contact section
 * @type {IStation[]}
 */
export const STATIONS: Array<IStation> = [
  WELL, HAM, CHCH, PICT, XEV, ZGH, XZO, QFV, XZT, BOO,
];
