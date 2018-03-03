import {IPort, Port} from '../definitions/port';
import {Point} from '../definitions/point';

export const NZAKL: IPort = new Port('Auckland', 'New Zealand', 'NZAKL', new Point(-36.840985, 174.765767), 'Port of Auckland');
export const NCNOU: IPort = new Port('Nouméa', 'New Caledonia', 'NCNOU', new Point(-22.271686, 166.436775), 'Port of Nouméa');
export const NCLIF: IPort = new Port('Lifou', 'New Caledonia', 'NCLIF', new Point(-20.909169, 167.277028), 'Lifou Cruise Port');
export const VUVLI: IPort = new Port('Port Vila', 'Vanuatu', 'VUVLI', new Point(-17.751214, 168.300679), 'Port of Port Vila');
export const NCMEE: IPort = new Port('Mare', 'New Caledonia', 'NCMEE', new Point(-21.548501, 167.876928), 'Port of Mare');

/**
 * Array of all ports for the Contact section
 * @type {IPort[]}
 */
export const PORTS: Array<IPort> = [
  NZAKL, NCNOU, NCLIF, VUVLI, NCMEE,
];
