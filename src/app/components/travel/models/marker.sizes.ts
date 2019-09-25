import { Size } from '../definitions/size'

export const AIRPORT_MARKER_SIZE: Size = { width: 16, height: 16 }
export const CURRENT_MARKER_SIZE: Size = { width: 28, height: 28 }
export const PORT_MARKER_SIZE: Size = { ...AIRPORT_MARKER_SIZE }
export const PREVIOUS_MARKER_SIZE: Size = { width: 24, height: 24 }
export const STATION_MARKER_SIZE: Size = { ...AIRPORT_MARKER_SIZE }
