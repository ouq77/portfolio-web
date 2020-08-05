const helmet = require('helmet')

module.exports = (req, res, next) => {
  const { hashes, isMozilla } = req.locals
  const scriptSrc = isMozilla
    ? ["'self'", "'unsafe-inline'", 'https://maps.googleapis.com']
    : ["'strict-dynamic'", ...hashes]

  helmet.contentSecurityPolicy({
    directives: {
      baseUri: ["'self'"],
      defaultSrc: ["'none'"],
      connectSrc: ["'self'"],
      formAction: ["'self'"],
      frameSrc: ["'self'", 'https://www.youtube.com'],
      frameAncestors: ["'self'"],
      fontSrc: ["'self'", 'data:', 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https://maps.googleapis.com', 'https://maps.gstatic.com', 'https://www.instagram.com', 'https://*.fbcdn.net'],
      manifestSrc: ["'self'"],
      objectSrc: ["'none'"],
      reportUri: '/report-violation',
      scriptSrc,
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://maps.googleapis.com'],
      upgradeInsecureRequests: []
    }
  })(req, res, next)
}
