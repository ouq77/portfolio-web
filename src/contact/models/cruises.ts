import {IPoint, Point} from '../definitions/point';
import * as ports from './ports';

const NZAKL_NCNOU_WAY_POINTS: Array<IPoint> = [
  new Point(-36.836672, 174.773138),
  new Point(-36.838641, 174.815257),
  new Point(-36.826060, 174.833527),
  new Point(-36.740982, 174.801530),
  new Point(-36.588723, 174.997753),
  new Point(-35.881402, 174.797575),
  new Point(-35.150536, 174.355819),
  new Point(-22.308833, 166.382680),
  new Point(-22.288075, 166.400212),
  new Point(-22.284363, 166.429779),
];
const NCNOU_NCLIF_WAY_POINTS: Array<IPoint> = [
  new Point(-22.284363, 166.429779),
  new Point(-22.289502, 166.418802),
  new Point(-22.328284, 166.437923),
  new Point(-22.519096, 166.806660),
  new Point(-22.294922, 167.090744),
  new Point(-21.047842, 167.512708),
  new Point(-20.899117, 167.320150),
];
const NCLIF_VUVLI_WAY_POINTS: Array<IPoint> = [
  new Point(-20.899117, 167.320150),
  new Point(-17.756278, 168.242528),
  new Point(-17.738667, 168.303998),
];
const VUVLI_NCMEE_WAY_POINTS: Array<IPoint> = [
  new Point(-17.738667, 168.303998),
  new Point(-17.756278, 168.242528),
  new Point(-21.077452, 167.756019),
  new Point(-21.356357, 167.677755),
  new Point(-21.522315, 167.758582),
];
const NCMEE_NZAKL_WAY_POINTS: Array<IPoint> = [
  new Point(-21.607433, 167.787109),
  new Point(-35.948985, 174.959560),
  new Point(-36.588723, 174.997753),
  new Point(-36.740982, 174.801530),
  new Point(-36.826060, 174.833527),
  new Point(-36.838641, 174.815257),
  new Point(-36.836672, 174.773138),
];

/**
 * Array of Cruises for the Contact section
 * @type {IPoint[][]}
 */
export const CRUISES: Array<Array<IPoint>> = [];

/**
 * Array of Upcoming Cruises for the Contact section
 * @type {IPoint[][]}
 */
export const UPCOMING_CRUISES: Array<Array<IPoint>> = [
  [ports.NZAKL.loc, ...NZAKL_NCNOU_WAY_POINTS, ports.NCNOU.loc],
  [ports.NCNOU.loc, ...NCNOU_NCLIF_WAY_POINTS, ports.NCLIF.loc],
  [ports.NCLIF.loc, ...NCLIF_VUVLI_WAY_POINTS, ports.VUVLI.loc],
  [ports.VUVLI.loc, ...VUVLI_NCMEE_WAY_POINTS, ports.NCMEE.loc],
  [ports.NCMEE.loc, ...NCMEE_NZAKL_WAY_POINTS, ports.NZAKL.loc],
];
