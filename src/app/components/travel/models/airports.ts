import { Airport, IAirport } from '../definitions/airport';
import { Point } from '../definitions/point';
import { AUSTRALIA, CHINA, HONG_KONG, JAPAN, NEW_ZEALAND, NORWAY, SOUTH_AFRICA, SWEDEN, THAILAND, UK, USA, ZAMBIA, ZIMBABWE } from './countries';

export const JNB: IAirport = new Airport('Johannesburg', SOUTH_AFRICA, 'JNB', new Point(-26.136837, 28.241157), 'OR Tambo International Airport');
export const CPT: IAirport = new Airport('Cape Town', SOUTH_AFRICA, 'CPT', new Point(-33.971459, 18.602241), 'Cape Town International Airport');
export const MBD: IAirport = new Airport('Mafikeng', SOUTH_AFRICA, 'MBD', new Point(-25.807261, 25.544465), 'Mafikeng International Airport');
export const DUR: IAirport = new Airport('Durban', SOUTH_AFRICA, 'DUR', new Point(-29.967507, 30.947187), 'Durban International Airport');
export const KIM: IAirport = new Airport('Kimberley', SOUTH_AFRICA, 'KIM', new Point(-28.802682, 24.765399), 'Kimberley Airport');
export const BFN: IAirport = new Airport('Bloemfontein', SOUTH_AFRICA, 'BFN', new Point(-29.095735, 26.298145), 'Bram Fischer International Airport');
export const PLZ: IAirport = new Airport('Port Elizabeth', SOUTH_AFRICA, 'PLZ', new Point(-33.986448, 25.610390), 'Port Elizabeth Airport');
export const ELS: IAirport = new Airport('East London', SOUTH_AFRICA, 'ELS', new Point(-33.038191, 27.828955), 'East London Airport');
export const GRJ: IAirport = new Airport('George', SOUTH_AFRICA, 'GRJ', new Point(-34.005193, 22.378423), 'George Airport');
export const MPM: IAirport = new Airport('Maputo', 'Mozambique', 'MPM', new Point(-25.919804, 32.572997), 'Maputo International Airport');
export const GBE: IAirport = new Airport('Gaborone', 'Botswana', 'GBE', new Point(-24.555994, 25.918776), 'Sir Seretse Khama International Airport');
export const WDH: IAirport = new Airport('Windhoek', 'Namibia', 'WDH', new Point(-22.480292, 17.470903), 'Hosea Kutako International Airport');
export const BUQ: IAirport = new Airport('Bulawayo', ZIMBABWE, 'BUQ', new Point(-20.018368, 28.624652), 'Joshua Mqabuko Nkomo International Airport');
export const HRE: IAirport = new Airport('Harare', ZIMBABWE, 'HRE', new Point(-17.918871, 31.097359), 'Harare International Airport');
export const LVI: IAirport = new Airport('Livingstone ', ZAMBIA, 'LVI', new Point(-17.818925, 25.818595), 'Harry Mwanga Nkumbula International Airport');
export const LUN: IAirport = new Airport('Lusaka', ZAMBIA, 'LUN', new Point(-15.330899, 28.454393), 'Kenneth Kaunda International Airport');
export const LAD: IAirport = new Airport('Luanda', 'Angola', 'LAD', new Point(-8.848009, 13.234900), 'Quatro de Fevereiro Airport');
export const DAR: IAirport = new Airport('Dar es Salaam', 'Tanzania', 'DAR', new Point(-6.872619, 39.206986), 'Julius Nyerere International Airport');
export const EBB: IAirport = new Airport('Entebbe', 'Uganda', 'EBB', new Point(0.044929, 32.442880), 'Entebbe International Airport');
export const NBO: IAirport = new Airport('Nairobi', 'Kenya', 'NBO', new Point(-1.322705, 36.926611), 'Jomo Kenyatta International Airport');
export const FIH: IAirport = new Airport('Kinshasa', 'Congo (DRC)', 'FIH', new Point(-4.385679, 15.444503), 'N\'djili International Airport');
export const LOS: IAirport = new Airport('Lagos', 'Nigeria', 'LOS', new Point(6.581759, 3.321484), 'Murtala Muhammed International Airport');
export const ABJ: IAirport = new Airport('Abidjan', 'Côte d\'Ivoire', 'ABJ', new Point(5.254863, -3.932870), 'Felix Houphouet Boigny Airport');
export const ACC: IAirport = new Airport('Accra', 'Ghana', 'ACC', new Point(5.606068, -0.168107), 'Kotoka International Airport');
export const DKR: IAirport = new Airport('Dakar', 'Senegal', 'DKR', new Point(14.744887, -17.490146), 'Léopold Sédar Senghor International Airport');
export const SID: IAirport = new Airport('Ilha do Sal', 'Cape Verde', 'SID', new Point(16.734608, -22.943608), 'Amilcar Cabral International Airport');
export const MRU: IAirport = new Airport('Plaine Magnien', 'Mauritius', 'MRU', new Point(-20.430714, 57.675511), 'Sir Seewoosagur Ramgoolam Airport');
export const GRU: IAirport = new Airport('São Paulo', 'Brazil', 'GRU', new Point(-23.434617, -46.478013), 'Guarulhos International Airport');
export const EZE: IAirport = new Airport('Beunos Aires', 'Argentina', 'EZE', new Point(-34.822544, -58.534969), 'Ministro Pistarini International Airport');
export const MIA: IAirport = new Airport('Miami', USA, 'MIA', new Point(25.795947, -80.286611), 'Miami International Airport');
export const ATL: IAirport = new Airport('Atlanta', USA, 'ATL', new Point(33.640795, -84.427223), 'Hartsfield–Jackson Atlanta International Airport');
export const IAD: IAirport = new Airport('Washington', USA, 'IAD', new Point(38.952765, -77.451732), 'Washington Dulles International Airport');
export const JFK: IAirport = new Airport('New York', USA, 'JFK', new Point(40.641242, -73.777941), 'John F. Kennedy International Airport');
export const LGA: IAirport = new Airport('New York', USA, 'LGA', new Point(40.776992, -73.873376), 'LaGuardia Airport');
export const YVR: IAirport = new Airport('Vancouver', 'Canada', 'YVR', new Point(49.196659, -123.181056), 'Vancouver International Airport');
export const LHR: IAirport = new Airport('London', UK, 'LHR', new Point(51.469979, -0.454044), 'London Heathrow Airport');
export const FRA: IAirport = new Airport('Frankfurt', 'Germany', 'FRA', new Point(50.037936, 8.562608), 'Frankfurt Airport');
export const ZRH: IAirport = new Airport('Zurich', 'Switzerland', 'ZRH', new Point(47.458256, 8.555717), 'Zurich Airport');
export const CDG: IAirport = new Airport('Paris', 'France', 'CDG', new Point(49.009702, 2.548251), 'Charles de Gaulle Airport');
export const CPH: IAirport = new Airport('Copenhagen', 'Denmark', 'CPH', new Point(55.618039, 12.651198), 'Copenhagen Airport');
export const AMS: IAirport = new Airport('Amsterdam', 'Netherlands', 'AMS', new Point(52.310523, 4.768740), 'Amsterdam Airport Schiphol');
export const BOM: IAirport = new Airport('Mumbai', 'India', 'BOM', new Point(19.090121, 72.868905), 'Chhatrapati Shivaji International Airport');
export const BKK: IAirport = new Airport('Bangkok', THAILAND, 'BKK', new Point(13.913019, 100.604164), 'Donmuang Airport (old)');
export const BKKN: IAirport = new Airport('Bangkok', THAILAND, 'BKK', new Point(13.689084, 100.751023), 'Suvarnabhumi Airport');
export const KIX: IAirport = new Airport('Osaka', JAPAN, 'KIX', new Point(34.432015, 135.230817), 'Kansai International Airport');
export const USM: IAirport = new Airport('Koh Samui', THAILAND, 'USM', new Point(9.548389, 100.063484), 'Koh Samui Airport');
export const HKG: IAirport = new Airport(HONG_KONG, HONG_KONG, 'HKG', new Point(22.324767, 114.198590), 'Kai Tak Airport (old)');
export const HKGN: IAirport = new Airport('Chek Lap Kok', HONG_KONG, 'HKG', new Point(22.307862, 113.922394), 'Hong Kong International Airport');
export const PER: IAirport = new Airport('Perth', AUSTRALIA, 'PER', new Point(-31.938471, 115.967523), 'Perth Airport');
export const DPS: IAirport = new Airport('Denpasar', 'Bali', 'DPS', new Point(-8.746727, 115.166801), 'Ngurah Rai International Airport');
export const DRW: IAirport = new Airport('Darwin', AUSTRALIA, 'DRW', new Point(-12.411127, 130.878227), 'Darwin International Airport');
export const ADL: IAirport = new Airport('Adelaide', AUSTRALIA, 'ADL', new Point(-34.946134, 138.533726), 'Adelaide Airport');
export const SYD: IAirport = new Airport('Sydney', AUSTRALIA, 'SYD', new Point(-33.939953, 151.175249), 'Kingsford Smith Airport');
export const HLZ: IAirport = new Airport('Hamilton', NEW_ZEALAND, 'HLZ', new Point(-37.865470, 175.337267), 'Hamilton International Airport');
export const CHC: IAirport = new Airport('Christchurch', NEW_ZEALAND, 'CHC', new Point(-43.486456, 172.537369), 'Christchurch International Airport');
export const ZQN: IAirport = new Airport('Queenstown', NEW_ZEALAND, 'ZQN', new Point(-45.020983, 168.740325), 'Queenstown Airport');
export const AKL: IAirport = new Airport('Auckland', NEW_ZEALAND, 'AKL', new Point(-37.008227, 174.785760), 'Auckland Airport');
export const WLG: IAirport = new Airport('Wellington', NEW_ZEALAND, 'WLG', new Point(-41.327551, 174.808308), 'Wellington International Airport');
export const NSN: IAirport = new Airport('Nelson', NEW_ZEALAND, 'NSN', new Point(-41.300020, 173.225254), 'Nelson Airport');
export const TRG: IAirport = new Airport('Tauranga', NEW_ZEALAND, 'TRG', new Point(-37.672093, 176.197666), 'Tauranga ICity Airport');
export const ROT: IAirport = new Airport('Rotorua', NEW_ZEALAND, 'ROT', new Point(-38.109354, 176.317118), 'Rotorua International Airport');
export const RAR: IAirport = new Airport('Avarua', 'Cook Islands', 'RAR', new Point(-21.202310, -159.805334), 'Rarotonga International Airport');
export const NRT: IAirport = new Airport('Tokyo', JAPAN, 'NRT', new Point(35.771991, 140.3906614), 'Narita International Airport');
export const SIN: IAirport = new Airport('Singapore', 'Singapore', 'SIN', new Point(1.3644256, 103.9893421), 'Changi Airport Singapore');
export const ARN: IAirport = new Airport('Stockholm', SWEDEN, 'ARN', new Point(59.6497649, 17.921592), 'Stockholm Arlanda Airport');
export const BGO: IAirport = new Airport('Bergen', NORWAY, 'BGO', new Point(60.2918326, 5.2198286), 'Bergen Airport');
export const TRD: IAirport = new Airport('Trondheim', NORWAY, 'TRD', new Point(63.4582722, 10.9204103), 'Trondheim Airport');
export const BOO: IAirport = new Airport('Bodø', NORWAY, 'BOO', new Point(67.268313, 14.3600464), 'Bodø Airport');
export const SJV: IAirport = new Airport('Svolvær', NORWAY, 'SJV', new Point(68.243335, 14.6669783), 'Svolvær Airport');
export const TOS: IAirport = new Airport('Tromsø', NORWAY, 'TOS', new Point(69.6819372, 18.914075), 'Tromsø Airport');
export const TIU: IAirport = new Airport('Timaru', NEW_ZEALAND, 'TIU', new Point(-44.303448, 171.2241313), 'Richard Pearse Airport');
export const CBR: IAirport = new Airport('Canberra', AUSTRALIA, 'CBR', new Point(-35.3032616, 149.1746154), 'Canberra Airport');
export const NPL: IAirport = new Airport('New Plymouth', NEW_ZEALAND, 'NPL', new Point(-39.007847, 174.1754103), 'New Plymouth Airport');
export const KBV: IAirport = new Airport('Krabi', THAILAND, 'KBV', new Point(8.0992802, 98.9810008), 'Krabi Airport');
export const HKT: IAirport = new Airport('Phuket', THAILAND, 'HKT', new Point(8.1103541, 98.3081319), 'Phuket International Airport');
export const MEL: IAirport = new Airport('Melbourne', AUSTRALIA, 'MEL', new Point(-37.6662769, 144.8354746), 'Melbourne Airport (Tullamarine)');
export const GIS: IAirport = new Airport('Gisborne', NEW_ZEALAND, 'GIS', new Point(-38.6628665, 177.9806031), 'Gisborne Airport');
export const PEK: IAirport = new Airport('Beijing', CHINA, 'PEK', new Point(40.079383, 116.6061803), 'Beijing Capital International Airport');
export const PVG: IAirport = new Airport('Shanghai', CHINA, 'PVG', new Point(31.1443485, 121.8060843), 'Shanghai Pudong International Airport');
export const DUD: IAirport = new Airport('Dunedin', NEW_ZEALAND, 'DUD', new Point(-45.924735, 170.201256), 'Dunedin International Airport');

/**
 * Array of all airports for the Contact section
 */
export const AIRPORTS: Array<IAirport> = [
  KIM, PLZ, ELS, JNB, AMS, LHR, NBO, CPT, MBD, DUR, BFN, GRJ, MPM, GBE, WDH, BUQ, HRE, LVI, LUN, LAD, DAR, EBB,
  FIH, LOS, ABJ, ACC, DKR, SID, MIA, ATL, IAD, JFK, LGA, MRU, HKG, PER, SYD, EZE, GRU, YVR, FRA, ZRH, CDG, CPH,
  BOM, BKK, KIX, BKKN, USM, HKGN, DPS, DRW, ADL, HLZ, CHC, ZQN, AKL, WLG, NSN, TRG, ROT, RAR, NRT, SIN, ARN, BGO,
  TRD, BOO, SJV, TOS, TIU, CBR, NPL, KBV, HKT, MEL, GIS, PEK, PVG, DUD,
];
