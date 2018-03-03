import {IPoint, Point} from '../definitions/point';
import * as ports from './ports';

const NZAKL_NCNOU_WAY_POINTS: Array<IPoint> = [
  new Point(-36.836672, 174.773138),
  new Point(-36.836800, 174.784000),
  new Point(-36.837700, 174.812000),
  new Point(-36.822500, 174.832000),
  new Point(-36.815000, 174.831000),
  new Point(-36.788500, 174.808000),
  new Point(-36.754100, 174.820700),
  new Point(-36.571500, 175.001700),
  new Point(-36.422800, 174.999000),
  new Point(-36.293100, 174.993000),
  new Point(-36.135700, 174.984300),
  new Point(-35.526200, 174.956700),
  new Point(-35.429143, 174.942059),
  new Point(-35.371600, 174.830000),
  new Point(-35.307100, 174.809000),
  new Point(-34.281300, 174.065000),
  new Point(-33.193400, 173.308000),
  new Point(-31.918900, 172.411000),
  new Point(-30.037500, 171.130000),
  new Point(-28.957100, 170.415000),
  new Point(-27.568900, 169.482000),
  new Point(-26.504400, 168.787000),
  new Point(-25.424400, 168.086000),
  new Point(-24.399700, 167.426000),
  new Point(-23.340900, 166.749000),
  new Point(-22.494700, 166.210000),
  new Point(-22.472800, 166.208000),
  new Point(-22.448200, 166.209000),
  new Point(-22.440000, 166.208000),
  new Point(-22.424100, 166.209000),
  new Point(-22.409600, 166.214000),
  new Point(-22.376300, 166.232000),
  new Point(-22.294995, 166.332880),
  new Point(-22.288959, 166.358801),
  new Point(-22.285465, 166.427122),
  new Point(-22.284512, 166.430384),
  new Point(-22.277681, 166.430727),
];
const NCNOU_LIFOU_WAY_POINTS: Array<IPoint> = [
  new Point(-22.276800, 166.431000),
  new Point(-22.282844, 166.429826),
  new Point(-22.285400, 166.423000),
  new Point(-22.298400, 166.421000),
  new Point(-22.327800, 166.441000),
  new Point(-22.376900, 166.610000),
  new Point(-22.395600, 166.761000),
  new Point(-22.390700, 166.826000),
  new Point(-22.402300, 166.892000),
  new Point(-22.397600, 166.931000),
  new Point(-22.381600, 166.952000),
  new Point(-22.328400, 167.061000),
  new Point(-22.185000, 167.134000),
  new Point(-21.181400, 167.447000),
  new Point(-21.072500, 167.483000),
  new Point(-21.053500, 167.479000),
  new Point(-20.984700, 167.433000),
  new Point(-20.967900, 167.418000),
  new Point(-20.930100, 167.370000),
  new Point(-20.918600, 167.341000),
  new Point(-20.911894, 167.321915),
  new Point(-20.907083, 167.296338),
];
const LIFOU_VUVLI_WAY_POINTS: Array<IPoint> = [
  new Point(-20.898672, 167.304604),
  new Point(-20.889218, 167.315473),
  new Point(-20.864586, 167.332090),
  new Point(-17.972300, 168.166000),
  new Point(-17.807800, 168.196000),
  new Point(-17.786800, 168.210000),
  new Point(-17.755100, 168.254000),
  new Point(-17.743700, 168.274000),
  new Point(-17.740800, 168.300000),
  new Point(-17.746100, 168.304000),
];
const VUVLI_NCMEE_WAY_POINTS: Array<IPoint> = [
  new Point(-17.746100, 168.304000),
  new Point(-17.740800, 168.300000),
  new Point(-17.743700, 168.274000),
  new Point(-17.755100, 168.254000),
  new Point(-17.786800, 168.210000),
  new Point(-17.807800, 168.196000),
  new Point(-17.972300, 168.166000),
  new Point(-20.100400, 167.814000),
  new Point(-21.116000, 167.672000),
  new Point(-21.356357, 167.677755),
  new Point(-21.522315, 167.758582),
  new Point(-21.539319, 167.800210),
  new Point(-21.542107, 167.820528),
];
const NCMEE_NZAKL_WAY_POINTS: Array<IPoint> = [
  new Point(-21.558535, 167.841583),
  new Point(-21.564914, 167.818569),
  new Point(-21.575111, 167.799964),
  new Point(-21.589130, 167.788494),
  new Point(-21.607433, 167.787109),
  new Point(-35.429143, 174.942059),
  new Point(-35.526200, 174.956700),
  new Point(-36.135700, 174.984300),
  new Point(-36.293100, 174.993000),
  new Point(-36.422800, 174.999000),
  new Point(-36.571500, 175.001700),
  new Point(-36.754100, 174.820700),
  new Point(-36.788500, 174.808000),
  new Point(-36.815000, 174.831000),
  new Point(-36.822500, 174.832000),
  new Point(-36.837700, 174.812000),
  new Point(-36.836800, 174.784000),
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
  [ports.NCNOU.loc, ...NCNOU_LIFOU_WAY_POINTS, ports.LIFOU.loc],
  [ports.LIFOU.loc, ...LIFOU_VUVLI_WAY_POINTS, ports.VUVLI.loc],
  [ports.VUVLI.loc, ...VUVLI_NCMEE_WAY_POINTS, ports.NCMEE.loc],
  [ports.NCMEE.loc, ...NCMEE_NZAKL_WAY_POINTS, ports.NZAKL.loc],
];
