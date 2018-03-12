import {IPort, Port} from '../definitions/port';
import {Point} from '../definitions/point';

export const DKCPH: IPort = new Port('København', 'Denmark', 'DKCPH', new Point(55.702022, 12.595930), 'Port of Copenhagen');
export const NOOSL: IPort = new Port('Oslo', 'Norway', 'NOOSL', new Point(59.902835, 10.744473), 'Port of Oslo');
export const NOSVJ: IPort = new Port('Svolvær', 'Norway', 'NOSVJ', new Point(68.230790, 14.566888), 'Port of Svolvær');
export const NOTOS: IPort = new Port('Tromsø', 'Norway', 'NOTOS', new Point(69.648689, 18.963214), 'Port of Tromsø');
export const NZAKL: IPort = new Port('Auckland', 'New Zealand', 'NZAKL', new Point(-36.840985, 174.765767), 'Port of Auckland');
export const NCNOU: IPort = new Port('Nouméa', 'New Caledonia', 'NCNOU', new Point(-22.271686, 166.436775), 'Port of Nouméa');
export const LIFOU: IPort = new Port('Lifou', 'New Caledonia', 'LIFOU', new Point(-20.909169, 167.277028), 'Lifou Marina');
export const VUVLI: IPort = new Port('Port Vila', 'Vanuatu', 'VUVLI', new Point(-17.756154, 168.299830), 'Port of Port Vila');
export const NCMEE: IPort = new Port('Mare', 'New Caledonia', 'NCMEE', new Point(-21.549376, 167.862849), 'Mare Anchor Point');

/**
 * Array of all ports for the Contact section
 * @type {IPort[]}
 */
export const PORTS: Array<IPort> = [
  DKCPH, NOOSL, NOSVJ, NOTOS, NZAKL, NCNOU, LIFOU, VUVLI, NCMEE,
];
