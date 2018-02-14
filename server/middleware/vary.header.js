module.exports = (req, res, next) => {
  res.header('Vary', 'User-Agent, Accept')
  next()
}
