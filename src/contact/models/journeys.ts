import {IAirport} from '../definitions/airport';
import * as airports from './airports';

/**
 * Array of Journeys for the Contact section
 * @type {IAirport[][]}
 */
export const JOURNEYS: Array<Array<IAirport>> = [
  [airports.KIM, airports.PLZ, airports.ELS], [airports.KIM, airports.JNB], [airports.JNB, airports.AMS, airports.LHR],
  [airports.JNB, airports.NBO, airports.LHR], [airports.JNB, airports.CPT], [airports.JNB, airports.MBD],
  [airports.JNB, airports.DUR], [airports.JNB, airports.BFN], [airports.JNB, airports.PLZ], [airports.JNB, airports.ELS],
  [airports.JNB, airports.GRJ], [airports.JNB, airports.MPM], [airports.JNB, airports.GBE], [airports.JNB, airports.WDH],
  [airports.JNB, airports.BUQ], [airports.JNB, airports.HRE], [airports.JNB, airports.LVI], [airports.JNB, airports.LUN],
  [airports.JNB, airports.LAD], [airports.JNB, airports.DAR], [airports.JNB, airports.EBB], [airports.JNB, airports.FIH],
  [airports.JNB, airports.LOS], [airports.JNB, airports.ABJ, airports.ACC, airports.JNB], [airports.JNB, airports.DKR],
  [airports.JNB, airports.SID, airports.JFK, airports.JNB], [airports.SID, airports.MIA, airports.CPT],
  [airports.SID, airports.ATL, airports.IAD, airports.LGA, airports.ATL, airports.JNB], [airports.JNB, airports.MRU],
  [airports.JNB, airports.HKG], [airports.JNB, airports.PER, airports.SYD], [airports.JNB, airports.EZE],
  [airports.JNB, airports.GRU, airports.EZE, airports.CPT], [airports.LHR, airports.YVR],
  [airports.JNB, airports.FRA, airports.AMS], [airports.JNB, airports.ZRH, airports.CPH], [airports.ZRH, airports.CDG],
  [airports.JNB, airports.BOM], [airports.JNB, airports.BKK, airports.KIX], [airports.JNB, airports.HKGN],
  [airports.BKK, airports.HKGN], [airports.BKK, airports.USM], [airports.JNB, airports.BKKN, airports.USM],
  [airports.JNB, airports.SYD], [airports.PER, airports.DPS, airports.DRW, airports.ADL, airports.SYD],
  [airports.CPT, airports.BFN], [airports.CPT, airports.KIM], [airports.CPT, airports.LHR], [airports.CPT, airports.FRA],
  [airports.CPT, airports.PLZ, airports.DUR], [airports.HKGN, airports.AKL], [airports.AKL, airports.SYD, airports.BKKN],
  [airports.AKL, airports.WLG], [airports.AKL, airports.CHC], [airports.HLZ, airports.WLG], [airports.HLZ, airports.CHC],
  [airports.AKL, airports.ZQN], [airports.AKL, airports.NSN], [airports.WLG, airports.TRG], [airports.WLG, airports.ROT],
  [airports.WLG, airports.CHC], [airports.AKL, airports.RAR], [airports.AKL, airports.NRT, airports.LHR],
  [airports.LHR, airports.ARN], [airports.BGO, airports.TRD], [airports.BOO, airports.SJV], [airports.TOS, airports.ARN],
  [airports.LHR, airports.SIN, airports.SYD, airports.WLG], [airports.WLG, airports.TIU], [airports.WLG, airports.NSN],
  [airports.WLG, airports.NPL], [airports.WLG, airports.CBR, airports.SIN, airports.JNB], [airports.WLG, airports.ZQN],
  [airports.BKKN, airports.KBV], [airports.HKT, airports.SIN, airports.MEL, airports.WLG], [airports.WLG, airports.GIS],
];

/**
 * Array of Upcoming Journeys for the Contact section
 * @type {IAirport[][]}
 */
export const UPCOMING_JOURNEYS: Array<Array<IAirport>> = [
  [airports.AKL, airports.YVR],
];
