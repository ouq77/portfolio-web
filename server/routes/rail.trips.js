const railTrips = require('./../config/rail.trips.json')

module.exports = (req, res) =>
  res.json(railTrips)
