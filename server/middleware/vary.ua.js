module.exports = (req, res, next) => {
  res.header('Vary', 'User-Agent')
  next()
}
