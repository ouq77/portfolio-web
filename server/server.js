const express = require('express')
const cache = require('express-cache-headers')
const userAgentBlocker = require('express-user-agent-blocker')
const middleware = require('./middleware')
const routes = require('./routes')
const envConfig = require('./config/env.config').get()
const cacheTimes = require('./config/cache.times')
const instagramImages = require('./modules/instagram.images')
const expressStaticMappings = require('./config/express.props.json').static
const expressRedirectMappings = require('./config/express.props.json').redirects
const port = envConfig.PORT
const preRenderToken = envConfig.PRE_RENDER_TOKEN
const blockedUserAgents = envConfig.BLOCKED_UA.split(',')
const instagramImageIds = envConfig.INSTAGRAM_IMAGE_IDS.split(',')
const app = express()

app.use(require('compression')())
app.use(require('netjet')({ cache: { max: 100 } }))
app.use(userAgentBlocker(blockedUserAgents))
app.use(middleware.helmet())
app.use(require('prerender-node').set('prerenderToken', preRenderToken))
app.use(require('body-parser').json({ type: ['json', 'application/csp-report'] }))
app.use(middleware.heroku)
app.use('/assets/images/*', middleware.assetsHeader)

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

// cache set by middleware.assetsHeader
app.get('/assets/images/*', routes.assets)

app.post('/report-violation', cache({ nocache: true }), routes.reportviolation)
app.get('/imageids', cache({ nocache: true }), routes.imageids)
app.post('/send', cache({ nocache: true }), routes.send)
app.get('/exclude', cache({ ttl: cacheTimes.DAYS_IN_SECS_60 }), routes.exclude)
app.get('/railtrips', cache({ nocache: true }), routes.railtrips)
app.get('/', cache({ nocache: true }), routes.html)
app.get('/*', cache({ ttl: cacheTimes.DAYS_IN_SECS_60 }), routes.fourohfour)

instagramImages.fetchInstaImages(instagramImageIds)
  .then((result) => {
    console.log(result)
    app.listen(port, () => {
      console.info(`listening on port ${port}`)
    })
  })
  .catch(err => {
    console.error(err)
    app.listen(port, () => {
      console.info(`listening on port ${port}`)
    })
  })
