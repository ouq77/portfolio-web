/**
 * Interface for a RailTrip object
 */
export interface RailTrip {
  trip: string
  path: string
}

/**
 * Interface for a RailTrips object
 */
export interface RailTrips {
  railTrips: Array<RailTrip>
  upcomingRailTrips: Array<RailTrip>
}
