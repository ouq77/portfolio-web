module.exports = (req, res, next) => {
  res.header('Vary', 'User-Agent, Accept')
  res.header('Cache-Control', 'public, no-cache, proxy-revalidate')
  next()
}
