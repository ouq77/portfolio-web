import { Port } from '../definitions/port'
import { DENMARK, NEW_CALEDONIA, NEW_ZEALAND, NORWAY } from './countries'

export const DKCPH: Port = { city: 'København', country: DENMARK, portCode: 'DKCPH', loc: { lat: 55.702022, lng: 12.595930 }, name: 'Port of Copenhagen' }
export const NOOSL: Port = { city: 'Oslo', country: NORWAY, portCode: 'NOOSL', loc: { lat: 59.902835, lng: 10.744473 }, name: 'Port of Oslo' }
export const NOSVJ: Port = { city: 'Svolvær', country: NORWAY, portCode: 'NOSVJ', loc: { lat: 68.230790, lng: 14.566888 }, name: 'Port of Svolvær' }
export const NOTOS: Port = { city: 'Tromsø', country: NORWAY, portCode: 'NOTOS', loc: { lat: 69.648689, lng: 18.963214 }, name: 'Port of Tromsø' }
export const NZAKL: Port = { city: 'Auckland', country: NEW_ZEALAND, portCode: 'NZAKL', loc: { lat: -36.840985, lng: 174.765767 }, name: 'Port of Auckland' }
export const NCNOU: Port = { city: 'Nouméa', country: NEW_CALEDONIA, portCode: 'NCNOU', loc: { lat: -22.271686, lng: 166.436775 }, name: 'Port of Nouméa' }
export const LIFOU: Port = { city: 'Lifou', country: NEW_CALEDONIA, portCode: 'LIFOU', loc: { lat: -20.909169, lng: 167.277028 }, name: 'Lifou Marina' }
export const VUVLI: Port = { city: 'Port Vila', country: 'Vanuatu', portCode: 'VUVLI', loc: { lat: -17.756154, lng: 168.299830 }, name: 'Port of Port Vila' }
export const NCMEE: Port = { city: 'Mare', country: NEW_CALEDONIA, portCode: 'NCMEE', loc: { lat: -21.549376, lng: 167.862849 }, name: 'Mare Anchor Point' }

/**
 * Array of all ports for the Contact section
 */
export const PORTS: Array<Port> = [
  DKCPH, NOOSL, NOSVJ, NOTOS, NZAKL, NCNOU, LIFOU, VUVLI, NCMEE,
]
