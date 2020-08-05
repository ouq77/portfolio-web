const helmet = require('helmet')

module.exports = (req, res, next) =>
  helmet.referrerPolicy({
    policy: 'no-referrer-when-downgrade'
  })(req, res, next)
