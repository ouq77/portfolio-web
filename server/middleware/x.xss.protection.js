module.exports = (req, res, next) => {
  res.setHeader('X-XSS-Protection', '1; mode=block')
  next()
}
