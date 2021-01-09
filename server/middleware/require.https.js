const { NODE_ENV } = require('./../config/env.config').get()

const requireHTTPS = (req, res, next) => {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && NODE_ENV !== 'development') {
    return res.redirect('https://' + req.get('host') + req.url)
  }
  next()
}

module.exports = requireHTTPS
