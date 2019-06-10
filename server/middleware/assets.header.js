const parser = require('ua-parser-js')

module.exports = (req, res, next) => {
  const ua = parser(req.headers['user-agent'])
  const supported = ua.browser.name === 'Chrome' && ua.browser.major >= '23'
  console.log('>>>>>> Supports webp', supported)
  res.header('Vary', 'User-Agent, Accept')
  res.header('Cache-Control', 'public, no-cache, proxy-revalidate')
  next()
}
