const envConfig = require('./../config/env.config').get()
const helmet = require('helmet')
const csp = require('helmet-csp')
const hsts = require('hsts')
const referrerPolicy = require('referrer-policy')
const hpkp = require('hpkp')

module.exports = () => {
  const helmetMiddleware = [
    helmet(),
    csp({
      directives: {
        defaultSrc: ['\'self\''],
        frameSrc: ['\'self\'', 'https://*.youtube.com'],
        fontSrc: ['\'self\'', 'data:', 'https://*.gstatic.com', 'https://maxcdn.bootstrapcdn.com'],
        imgSrc: ['\'self\'', 'data:', 'https://*.googleapis.com', 'https://*.gstatic.com', 'https://*.google-analytics.com', 'https://*.bithound.io', 'https://*.rawgit.com'],
        objectSrc: ['\'none\''],
        scriptSrc: ['\'self\'', '\'unsafe-inline\'', 'https://*.googleapis.com', 'https://*.google-analytics.com', 'https://*.cloudflare.com'],
        styleSrc: ['\'self\'', '\'unsafe-inline\'', 'https://*.googleapis.com', 'https://*.bootstrapcdn.com']
      },
      browserSniff: false
    }),
    hsts({
      maxAge: 5184000 // sixty days in seconds
    }),
    referrerPolicy({
      policy: 'no-referrer-when-downgrade'
    })
  ]

  if (envConfig.USE_HPKP) {
    helmetMiddleware.push(hpkp({
      includeSubdomains: true,
      maxAge: 5184000, // sixty days in seconds
      reportUri: '/report-violation',
      sha256s: ['53qvf5kek7sy/znpspnwh9xlfnvfmfucgiqwkvhj6dy=', 'Y9mvm0exBk1JoQ57f9Vm28jKo5lFm/woKcVxrYxu80o=']
    }))
  } else {
    console.log('HPKP disabled')
  }

  return helmetMiddleware
}
