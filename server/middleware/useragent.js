const useragent = require('useragent')

module.exports = (req, res, next) => {
  req.locals = {
    ...req.locals,
    isMozilla: useragent.is(req.headers['user-agent']).mozilla
  }
  next()
}
