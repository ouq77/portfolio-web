const helmet = require('helmet')

module.exports = (req, res, next) =>
  helmet.hsts({
    maxAge: 5184000 // sixty days in seconds
  })(req, res, next)
