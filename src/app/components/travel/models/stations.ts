import { Point } from '../definitions/point';
import { IStation, Station } from '../definitions/station';
import { DENMARK, NEW_ZEALAND, NORWAY, SCOTLAND, SWEDEN, SWITZERLAND, UK } from './countries';

export const MYB: IStation = new Station('London', UK, 'MYB', new Point(51.522617, -0.162974), 'London Marylebone');
export const AYS: IStation = new Station('Aylesbury', UK, 'AYS', new Point(51.813675, -0.814787), 'Aylesbury Station');
export const KGX: IStation = new Station('London', UK, 'KGX', new Point(51.531433, -0.124240), `London King's Cross`);
export const EDB: IStation = new Station('Edinburgh', SCOTLAND, 'EDB', new Point(55.951842, -3.190356), 'Edinburgh Waverley');
export const VIC: IStation = new Station('London', UK, 'VIC', new Point(51.4952111, -0.1440114), 'London Victoria');
export const BTN: IStation = new Station('Brighton', UK, 'BTN', new Point(50.829485, -0.141036), 'Brighton Station');
export const EBN: IStation = new Station('Eastbourne', UK, 'EBN', new Point(50.769411, 0.281219), 'Eastbourne Station');
export const HGS: IStation = new Station('Hastings', UK, 'HGS', new Point(50.858226, 0.577018), 'Hastings Station');
export const CST: IStation = new Station('London', UK, 'CST', new Point(51.511275, -0.090282), 'London Cannon Street');
export const BAN: IStation = new Station('Banbury', UK, 'BAN', new Point(52.060644, -1.327897), 'Banbury Station');
export const WAT: IStation = new Station('London', UK, 'WAT', new Point(51.503106, -0.112390), 'London Waterloo');
export const GLD: IStation = new Station('Guildford', UK, 'GLD', new Point(51.236765, -0.580707), 'Guildford Station');
export const PAD: IStation = new Station('London', UK, 'PAD', new Point(51.516609, -0.176839), 'London Paddington');
export const WNR: IStation = new Station('Windsor', UK, 'WNR', new Point(51.485719, -0.606355), 'Windsor and Eton Riverside Station');
export const RDG: IStation = new Station('Reading', UK, 'RDG', new Point(51.459205, -0.972766), 'Reading Station');
export const BCE: IStation = new Station('Bracknell', UK, 'BCE', new Point(51.413027, -0.752136), 'Bracknell Station');
export const SOU: IStation = new Station('Southampton', UK, 'SOU', new Point(50.907530, -1.414277), 'Southampton Central Station');
export const ZHB: IStation = new Station('Zürich', SWITZERLAND, 'ZHB', new Point(47.378375, 8.538908), 'Zürich Hauptbahnhof');
export const BHB: IStation = new Station('Bern', SWITZERLAND, 'BHB', new Point(46.948348, 7.436341), 'Bahnhof Bern');
export const GDB: IStation = new Station('Grindelwald', SWITZERLAND, 'GDB', new Point(46.624451, 8.033323), 'Bahnhof Grindelwald');
export const CHB: IStation = new Station('Chiasso', SWITZERLAND, 'CHB', new Point(45.831830, 9.031275), 'Stazione di Chiasso');
export const WEL: IStation = new Station('Wellington', NEW_ZEALAND, 'WELL', new Point(-41.279217, 174.780331), 'Wellington Station');
export const HAM: IStation = new Station('Hamilton', NEW_ZEALAND, 'HAM', new Point(-37.790919, 175.265010), 'Hamilton Station');
export const CHC: IStation = new Station('Christchurch', NEW_ZEALAND, 'CHCH', new Point(-43.539931, 172.607988), 'Christchurch Station');
export const PIC: IStation = new Station('Picton', NEW_ZEALAND, 'PICT', new Point(-41.288347, 174.004794), 'Picton Station');
export const XEV: IStation = new Station('Stockholm', SWEDEN, 'XEV', new Point(59.330616, 18.056583), 'Stockholm Central Station');
export const ZGH: IStation = new Station('Copenhagen', DENMARK, 'ZGH', new Point(55.672667, 12.564894), 'Copenhagen Central Station');
export const XZO: IStation = new Station('Oslo', NORWAY, 'XZO', new Point(59.910146, 10.755197), 'Oslo Central Station');
export const QFV: IStation = new Station('Bergen', NORWAY, 'QFV', new Point(60.390254, 5.333838), 'Bergen Railway Station');
export const XZT: IStation = new Station('Trondheim', NORWAY, 'XZT', new Point(63.436651, 10.398618), 'Trondheim Central Station');
export const BOO: IStation = new Station('Bodø', NORWAY, 'BOO', new Point(67.286444, 14.391597), 'Bodø Station');

/**
 * Array of all ports for the Contact section
 */
export const STATIONS: Array<IStation> = [
  MYB, AYS, KGX, EDB, VIC, BTN, EBN, HGS, CST, BAN, WAT, GLD, PAD, WNR, RDG, BCE, SOU, ZHB, BHB, GDB, CHB,
  WEL, HAM, CHC, PIC, XEV, ZGH, XZO, QFV, XZT, BOO,
];
