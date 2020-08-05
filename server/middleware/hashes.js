const { hashes } = require('./../helpers')

module.exports = (req, res, next) => {
  req.locals = {
    ...req.locals,
    hashes
  }
  next()
}
