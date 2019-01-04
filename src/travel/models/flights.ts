import * as airports from './airports';
import {IPoint} from '../definitions/point';

/**
 * Array of Flights for the Contact section
 * @type {IPoint[][]}
 */
export const FLIGHTS: Array<Array<IPoint>> = [
  [airports.KIM.loc, airports.PLZ.loc, airports.ELS.loc], [airports.KIM.loc, airports.JNB.loc],
  [airports.JNB.loc, airports.AMS.loc, airports.LHR.loc], [airports.JNB.loc, airports.NBO.loc, airports.LHR.loc],
  [airports.JNB.loc, airports.CPT.loc], [airports.JNB.loc, airports.MBD.loc], [airports.JNB.loc, airports.DUR.loc],
  [airports.JNB.loc, airports.BFN.loc], [airports.JNB.loc, airports.PLZ.loc], [airports.JNB.loc, airports.ELS.loc],
  [airports.JNB.loc, airports.GRJ.loc], [airports.JNB.loc, airports.MPM.loc], [airports.JNB.loc, airports.GBE.loc],
  [airports.JNB.loc, airports.WDH.loc], [airports.JNB.loc, airports.BUQ.loc], [airports.JNB.loc, airports.HRE.loc],
  [airports.JNB.loc, airports.LVI.loc], [airports.JNB.loc, airports.LUN.loc], [airports.JNB.loc, airports.LAD.loc],
  [airports.JNB.loc, airports.DAR.loc], [airports.JNB.loc, airports.EBB.loc], [airports.JNB.loc, airports.FIH.loc],
  [airports.JNB.loc, airports.LOS.loc], [airports.JNB.loc, airports.ABJ.loc, airports.ACC.loc, airports.JNB.loc],
  [airports.JNB.loc, airports.DKR.loc], [airports.JNB.loc, airports.SID.loc, airports.JFK.loc, airports.JNB.loc],
  [airports.SID.loc, airports.MIA.loc, airports.CPT.loc],
  [airports.SID.loc, airports.ATL.loc, airports.IAD.loc, airports.LGA.loc, airports.ATL.loc, airports.JNB.loc],
  [airports.JNB.loc, airports.MRU.loc], [airports.JNB.loc, airports.HKG.loc],
  [airports.JNB.loc, airports.PER.loc, airports.SYD.loc], [airports.JNB.loc, airports.EZE.loc],
  [airports.JNB.loc, airports.GRU.loc, airports.EZE.loc, airports.CPT.loc], [airports.LHR.loc, airports.YVR.loc],
  [airports.JNB.loc, airports.FRA.loc, airports.AMS.loc], [airports.JNB.loc, airports.ZRH.loc, airports.CPH.loc],
  [airports.ZRH.loc, airports.CDG.loc], [airports.JNB.loc, airports.BOM.loc],
  [airports.JNB.loc, airports.BKK.loc, airports.KIX.loc], [airports.JNB.loc, airports.HKGN.loc],
  [airports.BKK.loc, airports.HKGN.loc], [airports.BKK.loc, airports.USM.loc],
  [airports.JNB.loc, airports.BKKN.loc, airports.USM.loc], [airports.JNB.loc, airports.SYD.loc],
  [airports.PER.loc, airports.DPS.loc, airports.DRW.loc, airports.ADL.loc, airports.SYD.loc],
  [airports.CPT.loc, airports.BFN.loc], [airports.CPT.loc, airports.KIM.loc], [airports.CPT.loc, airports.LHR.loc],
  [airports.CPT.loc, airports.FRA.loc], [airports.CPT.loc, airports.PLZ.loc, airports.DUR.loc],
  [airports.HKGN.loc, airports.AKL.loc], [airports.AKL.loc, airports.SYD.loc, airports.BKKN.loc],
  [airports.AKL.loc, airports.WLG.loc], [airports.AKL.loc, airports.CHC.loc], [airports.HLZ.loc, airports.WLG.loc],
  [airports.HLZ.loc, airports.CHC.loc], [airports.AKL.loc, airports.ZQN.loc], [airports.AKL.loc, airports.NSN.loc],
  [airports.WLG.loc, airports.TRG.loc], [airports.WLG.loc, airports.ROT.loc], [airports.WLG.loc, airports.CHC.loc],
  [airports.AKL.loc, airports.RAR.loc], [airports.AKL.loc, airports.NRT.loc, airports.LHR.loc],
  [airports.LHR.loc, airports.ARN.loc], [airports.BGO.loc, airports.TRD.loc], [airports.BOO.loc, airports.SJV.loc],
  [airports.TOS.loc, airports.ARN.loc], [airports.LHR.loc, airports.SIN.loc, airports.SYD.loc, airports.WLG.loc],
  [airports.WLG.loc, airports.TIU.loc], [airports.WLG.loc, airports.NSN.loc], [airports.WLG.loc, airports.NPL.loc],
  [airports.WLG.loc, airports.CBR.loc, airports.SIN.loc, airports.JNB.loc], [airports.WLG.loc, airports.ZQN.loc],
  [airports.BKKN.loc, airports.KBV.loc], [airports.HKT.loc, airports.SIN.loc, airports.MEL.loc, airports.WLG.loc],
  [airports.WLG.loc, airports.GIS.loc], [airports.AKL.loc, airports.YVR.loc],
  [airports.AKL.loc, airports.PEK.loc, airports.FRA.loc, airports.PVG.loc, airports.AKL.loc],
];

/**
 * Array of Upcoming Flights for the Contact section
 * @type {IPoint[][]}
 */
export const UPCOMING_FLIGHTS: Array<Array<IPoint>> = [
];
