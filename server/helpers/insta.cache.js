/* eslint-disable camelcase */
const { DAYS_IN_SECS_5, DAYS_IN_SECS_10 } = require('./../config/cache.times')
const { FB_APP_ID, FB_APP_SECRET, INSTAGRAM_IMAGE_IDS } = require('./../config/env.config').get()
const cacheManager = require('cache-manager')
const fetch = require('node-fetch')
const memoryCache = cacheManager.caching({ promiseDependency: Promise, refreshThreshold: DAYS_IN_SECS_5, store: 'memory', ttl: DAYS_IN_SECS_10 })

const fetchInstaUrls = () => {
  console.info('setting up / refreshing instagram image url cache')
  return fetch(`https://graph.facebook.com/oauth/access_token?client_id=${FB_APP_ID}&client_secret=${FB_APP_SECRET}&grant_type=client_credentials`)
    .then(res => res.json())
    .then(({ access_token }) => {
      const images = INSTAGRAM_IMAGE_IDS
        .split(',')
        .map(imageId =>
          fetch(`https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/${imageId}/&access_token=${access_token}&maxwidth=320&fields=thumbnail_url`)
            .catch(err => console.error(`Error obtaining thumbnail: ${err}`))
        )

      return Promise
        .all(images)
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => data.map(({ thumbnail_url }) => thumbnail_url))
    })
    .catch(err => console.error(`Error obtaining access token: ${err}`))
}

const instaCache = () => memoryCache.wrap('imageUrls', () => fetchInstaUrls())

module.exports = instaCache
