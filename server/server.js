const express = require('express')
const cache = require('express-cache-headers')
const cors = require('cors')
const helmet = require('helmet')
const userAgentBlocker = require('express-user-agent-blocker')
const {
  assetsHeader,
  assetsWebp,
  csp,
  hashes,
  heroku,
  hsts,
  referrerPolicy,
  useragent,
  xXssProtection
} = require('./middleware')
const {
  exclude,
  fourOhFour,
  html,
  imageUrls,
  railTrips,
  reportViolation,
  send
} = require('./routes')
const { BLOCKED_UA, PORT } = require('./config/env.config').get()
const { DAYS_IN_SECS_60 } = require('./config/cache.times')
const expressStaticMappings = require('./config/express.props.json').static
const expressRedirectMappings = require('./config/express.props.json').redirects
const app = express()

app.use(cors((req, callback) => {
  let corsOptions = {
    methods: ['GET', 'POST'],
    origin: 'https://portfolio.ouq77.kiwi'
  }
  const origin = req.header('origin')
  if (/(ouq77\.herokuapp\.com|localhost)/.test(origin)) {
    // alternative allowed origins
    corsOptions = { ...corsOptions, origin }
  }
  callback(null, corsOptions)
}))
app.use(userAgentBlocker(BLOCKED_UA.split(',')))
app.use(useragent)
app.use(hashes)
// helmet
app.use(helmet.dnsPrefetchControl())
app.use(helmet.expectCt())
app.use(helmet.frameguard())
app.use(helmet.hidePoweredBy())
app.use(helmet.ieNoOpen())
app.use(helmet.noSniff())
app.use(helmet.permittedCrossDomainPolicies())
// custom helmet
app.use(csp)
app.use(hsts)
app.use(referrerPolicy)
app.use(xXssProtection)

app.use(require('compression')())
app.use(require('body-parser').json({ type: ['json', 'application/csp-report'] }))
app.use(heroku)
// cache control set by middleware.assetsHeader
app.use('/assets/images/*', assetsHeader)
app.use(assetsWebp)

expressStaticMappings.forEach((mapping) => {
  console.info(`mapping resource "${mapping.uri}" to static location "${mapping.location}" with cache "${mapping.cache}"`)
  app.use(mapping.uri, express.static(mapping.location, { maxAge: mapping.cache }))
})

expressRedirectMappings.forEach((mapping) => {
  console.info(`redirecting resource "${mapping.uri}" to new location "${mapping.newUri}"`)
  app.get(mapping.uri, (req, res) => {
    res.redirect(301, mapping.newUri)
  })
})

app.post('/report-violation', cache({ nocache: true }), reportViolation)
app.get('/imageurls', cache({ nocache: true }), imageUrls)
app.post('/send', cache({ nocache: true }), send)
app.get('/exclude', cache({ ttl: DAYS_IN_SECS_60 }), exclude)
app.get('/railtrips', cache({ nocache: true }), railTrips)
app.get('/', cache({ nocache: true }), html)
app.get('/*', cache({ ttl: DAYS_IN_SECS_60 }), fourOhFour)

app.listen(PORT, () => {
  console.log(`node ${process.version}`)
  console.info(`listening on port ${PORT}`)
})
