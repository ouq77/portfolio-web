import { Airport } from '../definitions/airport'

import { AUSTRALIA, CANADA, CHINA, GERMANY, HONG_KONG, JAPAN, NEW_ZEALAND, NORWAY, SOUTH_AFRICA, SWEDEN, THAILAND, UK, USA, ZAMBIA, ZIMBABWE } from './countries'

export const JNB: Airport = { city: 'Johannesburg', country: SOUTH_AFRICA, iataCode: 'JNB', loc: { lat: -26.136837, lng: 28.241157 }, name: 'OR Tambo International' }
export const CPT: Airport = { city: 'Cape Town', country: SOUTH_AFRICA, iataCode: 'CPT', loc: { lat: -33.971459, lng: 18.602241 }, name: 'Cape Town International' }
export const MBD: Airport = { city: 'Mafikeng', country: SOUTH_AFRICA, iataCode: 'MBD', loc: { lat: -25.807261, lng: 25.544465 }, name: 'Mafikeng International' }
export const DUR: Airport = { city: 'Durban', country: SOUTH_AFRICA, iataCode: 'DUR', loc: { lat: -29.967507, lng: 30.947187 }, name: 'Durban International' }
export const KIM: Airport = { city: 'Kimberley', country: SOUTH_AFRICA, iataCode: 'KIM', loc: { lat: -28.802682, lng: 24.765399 }, name: 'Kimberley' }
export const BFN: Airport = { city: 'Bloemfontein', country: SOUTH_AFRICA, iataCode: 'BFN', loc: { lat: -29.095735, lng: 26.298145 }, name: 'Bram Fischer International' }
export const PLZ: Airport = { city: 'Port Elizabeth', country: SOUTH_AFRICA, iataCode: 'PLZ', loc: { lat: -33.986448, lng: 25.610390 }, name: 'Port Elizabeth' }
export const ELS: Airport = { city: 'East London', country: SOUTH_AFRICA, iataCode: 'ELS', loc: { lat: -33.038191, lng: 27.828955 }, name: 'East London' }
export const GRJ: Airport = { city: 'George', country: SOUTH_AFRICA, iataCode: 'GRJ', loc: { lat: -34.005193, lng: 22.378423 }, name: 'George' }
export const MPM: Airport = { city: 'Maputo', country: 'Mozambique', iataCode: 'MPM', loc: { lat: -25.919804, lng: 32.572997 }, name: 'Maputo International' }
export const GBE: Airport = { city: 'Gaborone', country: 'Botswana', iataCode: 'GBE', loc: { lat: -24.555994, lng: 25.918776 }, name: 'Sir Seretse Khama International' }
export const WDH: Airport = { city: 'Windhoek', country: 'Namibia', iataCode: 'WDH', loc: { lat: -22.480292, lng: 17.470903 }, name: 'Hosea Kutako International' }
export const BUQ: Airport = { city: 'Bulawayo', country: ZIMBABWE, iataCode: 'BUQ', loc: { lat: -20.018368, lng: 28.624652 }, name: 'Joshua Mqabuko Nkomo International' }
export const HRE: Airport = { city: 'Harare', country: ZIMBABWE, iataCode: 'HRE', loc: { lat: -17.918871, lng: 31.097359 }, name: 'Harare International' }
export const LVI: Airport = { city: 'Livingstone ', country: ZAMBIA, iataCode: 'LVI', loc: { lat: -17.818925, lng: 25.818595 }, name: 'Harry Mwanga Nkumbula International' }
export const LUN: Airport = { city: 'Lusaka', country: ZAMBIA, iataCode: 'LUN', loc: { lat: -15.330899, lng: 28.454393 }, name: 'Kenneth Kaunda International' }
export const LAD: Airport = { city: 'Luanda', country: 'Angola', iataCode: 'LAD', loc: { lat: -8.848009, lng: 13.234900 }, name: 'Quatro de Fevereiro' }
export const DAR: Airport = { city: 'Dar es Salaam', country: 'Tanzania', iataCode: 'DAR', loc: { lat: -6.872619, lng: 39.206986 }, name: 'Julius Nyerere International' }
export const EBB: Airport = { city: 'Entebbe', country: 'Uganda', iataCode: 'EBB', loc: { lat: 0.044929, lng: 32.442880 }, name: 'Entebbe International' }
export const NBO: Airport = { city: 'Nairobi', country: 'Kenya', iataCode: 'NBO', loc: { lat: -1.322705, lng: 36.926611 }, name: 'Jomo Kenyatta International' }
export const FIH: Airport = { city: 'Kinshasa', country: 'Congo (DRC)', iataCode: 'FIH', loc: { lat: -4.385679, lng: 15.444503 }, name: `N'djili International` }
export const LOS: Airport = { city: 'Lagos', country: 'Nigeria', iataCode: 'LOS', loc: { lat: 6.581759, lng: 3.321484 }, name: 'Murtala Muhammed International' }
export const ABJ: Airport = { city: 'Abidjan', country: 'Côte d\'Ivoire', iataCode: 'ABJ', loc: { lat: 5.254863, lng: -3.932870 }, name: 'Felix Houphouet Boigny' }
export const ACC: Airport = { city: 'Accra', country: 'Ghana', iataCode: 'ACC', loc: { lat: 5.606068, lng: -0.168107 }, name: 'Kotoka International' }
export const DKR: Airport = { city: 'Dakar', country: 'Senegal', iataCode: 'DKR', loc: { lat: 14.744887, lng: -17.490146 }, name: 'Léopold Sédar Senghor International' }
export const SID: Airport = { city: 'Ilha do Sal', country: 'Cape Verde', iataCode: 'SID', loc: { lat: 16.734608, lng: -22.943608 }, name: 'Amilcar Cabral International' }
export const MRU: Airport = { city: 'Plaine Magnien', country: 'Mauritius', iataCode: 'MRU', loc: { lat: -20.430714, lng: 57.675511 }, name: 'Sir Seewoosagur Ramgoolam' }
export const GRU: Airport = { city: 'São Paulo', country: 'Brazil', iataCode: 'GRU', loc: { lat: -23.434617, lng: -46.478013 }, name: 'Guarulhos International' }
export const EZE: Airport = { city: 'Beunos Aires', country: 'Argentina', iataCode: 'EZE', loc: { lat: -34.822544, lng: -58.534969 }, name: 'Ministro Pistarini International' }
export const MIA: Airport = { city: 'Miami', country: USA, iataCode: 'MIA', loc: { lat: 25.795947, lng: -80.286611 }, name: 'Miami International' }
export const ATL: Airport = { city: 'Atlanta', country: USA, iataCode: 'ATL', loc: { lat: 33.640795, lng: -84.427223 }, name: 'Hartsfield–Jackson Atlanta International' }
export const IAD: Airport = { city: 'Washington', country: USA, iataCode: 'IAD', loc: { lat: 38.952765, lng: -77.451732 }, name: 'Washington Dulles International' }
export const JFK: Airport = { city: 'New York', country: USA, iataCode: 'JFK', loc: { lat: 40.641242, lng: -73.777941 }, name: 'John F. Kennedy International' }
export const LGA: Airport = { city: 'New York', country: USA, iataCode: 'LGA', loc: { lat: 40.776992, lng: -73.873376 }, name: 'LaGuardia' }
export const YVR: Airport = { city: 'Vancouver', country: CANADA, iataCode: 'YVR', loc: { lat: 49.196659, lng: -123.181056 }, name: 'Vancouver International' }
export const LHR: Airport = { city: 'London', country: UK, iataCode: 'LHR', loc: { lat: 51.469979, lng: -0.454044 }, name: 'London Heathrow' }
export const FRA: Airport = { city: 'Frankfurt', country: GERMANY, iataCode: 'FRA', loc: { lat: 50.037936, lng: 8.562608 }, name: 'Frankfurt' }
export const ZRH: Airport = { city: 'Zurich', country: 'Switzerland', iataCode: 'ZRH', loc: { lat: 47.458256, lng: 8.555717 }, name: 'Zurich' }
export const CDG: Airport = { city: 'Paris', country: 'France', iataCode: 'CDG', loc: { lat: 49.009702, lng: 2.548251 }, name: 'Charles de Gaulle' }
export const CPH: Airport = { city: 'Copenhagen', country: 'Denmark', iataCode: 'CPH', loc: { lat: 55.618039, lng: 12.651198 }, name: 'Copenhagen' }
export const AMS: Airport = { city: 'Amsterdam', country: 'Netherlands', iataCode: 'AMS', loc: { lat: 52.310523, lng: 4.768740 }, name: 'Amsterdam Airport Schiphol' }
export const BOM: Airport = { city: 'Mumbai', country: 'India', iataCode: 'BOM', loc: { lat: 19.090121, lng: 72.868905 }, name: 'Chhatrapati Shivaji International' }
export const BKK: Airport = { city: 'Bangkok', country: THAILAND, iataCode: 'BKK', loc: {lat: 13.913019, lng: 100.604164 }, name: 'Donmuang (old)' }
export const BKKN: Airport = { city: 'Bangkok', country: THAILAND, iataCode: 'BKK', loc: { lat: 13.689084, lng: 100.751023 }, name: 'Suvarnabhumi' }
export const KIX: Airport = { city: 'Osaka', country: JAPAN, iataCode: 'KIX', loc: { lat: 34.432015, lng: 135.230817 }, name: 'Kansai International' }
export const USM: Airport = { city: 'Koh Samui', country: THAILAND, iataCode: 'USM', loc: { lat: 9.548389, lng: 100.063484 }, name: 'Koh Samui' }
export const HKG: Airport = { city: HONG_KONG, country: HONG_KONG, iataCode: 'HKG', loc: { lat: 22.324767, lng: 114.198590 }, name: 'Kai Tak (old)' }
export const HKGN: Airport = { city: 'Chek Lap Kok', country: HONG_KONG, iataCode: 'HKG', loc: { lat: 22.307862, lng: 113.922394 }, name: 'Hong Kong International' }
export const PER: Airport = { city: 'Perth', country: AUSTRALIA, iataCode: 'PER', loc: { lat: -31.938471, lng: 115.967523 }, name: 'Perth' }
export const DPS: Airport = { city: 'Denpasar', country: 'Bali', iataCode: 'DPS', loc: { lat: -8.746727, lng: 115.166801 }, name: 'Ngurah Rai International' }
export const DRW: Airport = { city: 'Darwin', country: AUSTRALIA, iataCode: 'DRW', loc: { lat: -12.411127, lng: 130.878227 }, name: 'Darwin International' }
export const ADL: Airport = { city: 'Adelaide', country: AUSTRALIA, iataCode: 'ADL', loc: { lat: -34.946134, lng: 138.533726 }, name: 'Adelaide' }
export const SYD: Airport = { city: 'Sydney', country: AUSTRALIA, iataCode: 'SYD', loc: { lat: -33.939953, lng: 151.175249 }, name: 'Kingsford Smith' }
export const HLZ: Airport = { city: 'Hamilton', country: NEW_ZEALAND, iataCode: 'HLZ', loc: { lat: -37.865470, lng: 175.337267 }, name: 'Hamilton International' }
export const CHC: Airport = { city: 'Christchurch', country: NEW_ZEALAND, iataCode: 'CHC', loc: { lat: -43.486456, lng: 172.537369 }, name: 'Christchurch International' }
export const ZQN: Airport = { city: 'Queenstown', country: NEW_ZEALAND, iataCode: 'ZQN', loc: { lat: -45.020983, lng: 168.740325 }, name: 'Queenstown' }
export const AKL: Airport = { city: 'Auckland', country: NEW_ZEALAND, iataCode: 'AKL', loc: { lat: -37.008227, lng: 174.785760 }, name: 'Auckland' }
export const WLG: Airport = { city: 'Wellington', country: NEW_ZEALAND, iataCode: 'WLG', loc: { lat: -41.327551, lng: 174.808308 }, name: 'Wellington International' }
export const NSN: Airport = { city: 'Nelson', country: NEW_ZEALAND, iataCode: 'NSN', loc: { lat: -41.300020, lng: 173.225254 }, name: 'Nelson' }
export const TRG: Airport = { city: 'Tauranga', country: NEW_ZEALAND, iataCode: 'TRG', loc: { lat: -37.672093, lng: 176.197666 }, name: 'Tauranga' }
export const ROT: Airport = { city: 'Rotorua', country: NEW_ZEALAND, iataCode: 'ROT', loc: { lat: -38.109354, lng: 176.317118 }, name: 'Rotorua International' }
export const RAR: Airport = { city: 'Avarua', country: 'Cook Islands', iataCode: 'RAR', loc: { lat: -21.202310, lng: -159.805334 }, name: 'Rarotonga International' }
export const NRT: Airport = { city: 'Tokyo', country: JAPAN, iataCode: 'NRT', loc: { lat: 35.771991, lng: 140.3906614 }, name: 'Narita International' }
export const SIN: Airport = { city: 'Singapore', country: 'Singapore', iataCode: 'SIN', loc: { lat: 1.3644256, lng: 103.9893421 }, name: 'Singapore Changi' }
export const ARN: Airport = { city: 'Stockholm', country: SWEDEN, iataCode: 'ARN', loc: { lat: 59.6497649, lng: 17.921592 }, name: 'Stockholm Arlanda' }
export const BGO: Airport = { city: 'Bergen', country: NORWAY, iataCode: 'BGO', loc: { lat: 60.2918326, lng: 5.2198286 }, name: 'Bergen' }
export const TRD: Airport = { city: 'Trondheim', country: NORWAY, iataCode: 'TRD', loc: { lat: 63.4582722, lng: 10.9204103 }, name: 'Trondheim' }
export const BOO: Airport = { city: 'Bodø', country: NORWAY, iataCode: 'BOO', loc: { lat: 67.268313, lng: 14.3600464 }, name: 'Bodø' }
export const SJV: Airport = { city: 'Svolvær', country: NORWAY, iataCode: 'SJV', loc: { lat: 68.243335, lng: 14.6669783 }, name: 'Svolvær' }
export const TOS: Airport = { city: 'Tromsø', country: NORWAY, iataCode: 'TOS', loc: { lat: 69.6819372, lng: 18.914075 }, name: 'Tromsø' }
export const TIU: Airport = { city: 'Timaru', country: NEW_ZEALAND, iataCode: 'TIU', loc: { lat: -44.303448, lng: 171.2241313 }, name: 'Richard Pearse' }
export const CBR: Airport = { city: 'Canberra', country: AUSTRALIA, iataCode: 'CBR', loc: { lat: -35.3032616, lng: 149.1746154 }, name: 'Canberra' }
export const NPL: Airport = { city: 'New Plymouth', country: NEW_ZEALAND, iataCode: 'NPL', loc: { lat: -39.007847, lng: 174.1754103 }, name: 'New Plymouth' }
export const KBV: Airport = { city: 'Krabi', country: THAILAND, iataCode: 'KBV', loc: { lat: 8.0992802, lng: 98.9810008 }, name: 'Krabi' }
export const HKT: Airport = { city: 'Phuket', country: THAILAND, iataCode: 'HKT', loc: { lat: 8.1103541, lng: 98.3081319 }, name: 'Phuket International' }
export const MEL: Airport = { city: 'Melbourne', country: AUSTRALIA, iataCode: 'MEL', loc: { lat: -37.6662769, lng: 144.8354746 }, name: 'Melbourne (Tullamarine)' }
export const GIS: Airport = { city: 'Gisborne', country: NEW_ZEALAND, iataCode: 'GIS', loc: { lat: -38.6628665, lng: 177.9806031 }, name: 'Gisborne' }
export const CXH: Airport = { city: 'Vancouver', country: CANADA, iataCode: 'CXH', loc: { lat: 49.290761, lng: -123.118453 }, name: 'Seaplane Terminal' }
export const YWH: Airport = { city: 'Victoria', country: CANADA, iataCode: 'YWH', loc: { lat: 48.423626, lng: -123.371034 }, name: 'Victoria Harbour' }
export const PEK: Airport = { city: 'Beijing', country: CHINA, iataCode: 'PEK', loc: { lat: 40.079383, lng: 116.6061803 }, name: 'Beijing Capital International' }
export const PVG: Airport = { city: 'Shanghai', country: CHINA, iataCode: 'PVG', loc: { lat: 31.1443485, lng: 121.8060843 }, name: 'Shanghai Pudong International' }
export const DUD: Airport = { city: 'Dunedin', country: NEW_ZEALAND, iataCode: 'DUD', loc: { lat: -45.924735, lng: 170.201256 }, name: 'Dunedin International' }
export const BNE: Airport = { city: 'Brisbane', country: AUSTRALIA, iataCode: 'BNE', loc: { lat: -27.394414, lng: 153.121251 }, name: 'Brisbane International' }
export const LAX: Airport = { city: 'Los Angeles', country: USA, iataCode: 'LAX', loc: { lat: 33.941709, lng: -118.409040  }, name: 'Los Angeles International' }
export const YUL: Airport = { city: 'Montréal', country: CANADA, iataCode: 'YUL', loc: { lat: 45.465821, lng: -73.745975 }, name: 'Pierre Elliott Trudeau International' }
export const SFO: Airport = { city: 'San Francisco', country: USA, iataCode: 'SFO', loc: { lat: 37.621432, lng: -122.379342 }, name: 'San Francisco International' }

/**
 * Array of all airports for the Contact section
 */
export const AIRPORTS: Array<Airport> = [
  KIM, PLZ, ELS, JNB, AMS, LHR, NBO, CPT, MBD, DUR, BFN, GRJ, MPM, GBE, WDH, BUQ, HRE, LVI, LUN, LAD, DAR, EBB,
  FIH, LOS, ABJ, ACC, DKR, SID, MIA, ATL, IAD, JFK, LGA, MRU, HKG, PER, SYD, EZE, GRU, YVR, FRA, ZRH, CDG, CPH,
  BOM, BKK, KIX, BKKN, USM, HKGN, DPS, DRW, ADL, HLZ, CHC, ZQN, AKL, WLG, NSN, TRG, ROT, RAR, NRT, SIN, ARN, BGO,
  TRD, BOO, SJV, TOS, TIU, CBR, NPL, KBV, HKT, MEL, GIS, CXH, YWH, PEK, PVG, DUD, BNE, LAX, YUL, SFO,
]
