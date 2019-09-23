import { IPoint } from '../definitions/point';
import {
  ABJ, ACC, ADL, AKL, AMS, ARN, ATL, BFN, BGO, BKK, BKKN, BNE, BOM, BOO, BUQ, CBR, CDG, CHC, CPH, CPT, DAR,
  DKR, DPS, DRW, DUD, DUR, EBB, ELS, EZE, FIH, FRA, GBE, GIS, GRJ, GRU, HKG, HKGN, HKT, HLZ, HRE, IAD, JFK, JNB,
  KBV, KIM, KIX, LAD, LGA, LHR, LOS, LUN, LVI, MBD, MEL, MIA, MPM, MRU, NBO, NPL, NRT, NSN, PEK, PER, PLZ, PVG,
  RAR, ROT, SID, SIN, SJV, SYD, TIU, TOS, TRD, TRG, USM, WDH, WLG, YVR, ZQN, ZRH
} from './airports';

/**
 * Array of Flights for the Contact section
 */
export const FLIGHTS: Array<Array<IPoint>> = [
  [KIM.loc, PLZ.loc, ELS.loc], [KIM.loc, JNB.loc],
  [JNB.loc, AMS.loc, LHR.loc], [JNB.loc, NBO.loc, LHR.loc],
  [JNB.loc, CPT.loc], [JNB.loc, MBD.loc], [JNB.loc, DUR.loc],
  [JNB.loc, BFN.loc], [JNB.loc, PLZ.loc], [JNB.loc, ELS.loc],
  [JNB.loc, GRJ.loc], [JNB.loc, MPM.loc], [JNB.loc, GBE.loc],
  [JNB.loc, WDH.loc], [JNB.loc, BUQ.loc], [JNB.loc, HRE.loc],
  [JNB.loc, LVI.loc], [JNB.loc, LUN.loc], [JNB.loc, LAD.loc],
  [JNB.loc, DAR.loc], [JNB.loc, EBB.loc], [JNB.loc, FIH.loc],
  [JNB.loc, LOS.loc], [JNB.loc, ABJ.loc, ACC.loc, JNB.loc],
  [JNB.loc, DKR.loc], [JNB.loc, SID.loc, JFK.loc, JNB.loc],
  [SID.loc, MIA.loc, CPT.loc],
  [SID.loc, ATL.loc, IAD.loc, LGA.loc, ATL.loc, JNB.loc],
  [JNB.loc, MRU.loc], [JNB.loc, HKG.loc],
  [JNB.loc, PER.loc, SYD.loc], [JNB.loc, EZE.loc],
  [JNB.loc, GRU.loc, EZE.loc, CPT.loc], [LHR.loc, YVR.loc],
  [JNB.loc, FRA.loc, AMS.loc], [JNB.loc, ZRH.loc, CPH.loc],
  [ZRH.loc, CDG.loc], [JNB.loc, BOM.loc],
  [JNB.loc, BKK.loc, KIX.loc], [JNB.loc, HKGN.loc],
  [BKK.loc, HKGN.loc], [BKK.loc, USM.loc],
  [JNB.loc, BKKN.loc, USM.loc], [JNB.loc, SYD.loc],
  [PER.loc, DPS.loc, DRW.loc, ADL.loc, SYD.loc],
  [CPT.loc, BFN.loc], [CPT.loc, KIM.loc], [CPT.loc, LHR.loc],
  [CPT.loc, FRA.loc], [CPT.loc, PLZ.loc, DUR.loc],
  [HKGN.loc, AKL.loc], [AKL.loc, SYD.loc, BKKN.loc],
  [AKL.loc, WLG.loc], [AKL.loc, CHC.loc], [HLZ.loc, WLG.loc],
  [HLZ.loc, CHC.loc], [AKL.loc, ZQN.loc], [AKL.loc, NSN.loc],
  [WLG.loc, TRG.loc], [WLG.loc, ROT.loc], [WLG.loc, CHC.loc],
  [AKL.loc, RAR.loc], [AKL.loc, NRT.loc, LHR.loc],
  [LHR.loc, ARN.loc], [BGO.loc, TRD.loc], [BOO.loc, SJV.loc],
  [TOS.loc, ARN.loc], [LHR.loc, SIN.loc, SYD.loc, WLG.loc],
  [WLG.loc, TIU.loc], [WLG.loc, NSN.loc], [WLG.loc, NPL.loc],
  [WLG.loc, CBR.loc, SIN.loc, JNB.loc], [WLG.loc, ZQN.loc],
  [BKKN.loc, KBV.loc], [HKT.loc, SIN.loc, MEL.loc, WLG.loc],
  [WLG.loc, GIS.loc], [AKL.loc, YVR.loc],
  [AKL.loc, PEK.loc, FRA.loc, PVG.loc, AKL.loc],
  [WLG.loc, DUD.loc, CHC.loc],
];

/**
 * Array of Upcoming Flights for the Contact section
 */
export const UPCOMING_FLIGHTS: Array<Array<IPoint>> = [
  [WLG.loc, BNE.loc]
];
