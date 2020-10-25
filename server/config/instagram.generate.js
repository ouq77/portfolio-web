/* eslint-disable camelcase */
const fs = require('fs')
const fetch = require('node-fetch')
const { FB_APP_ID, FB_APP_SECRET, INSTAGRAM_IMAGE_IDS } = require('./env.config').get()

fetch(`https://graph.facebook.com/oauth/access_token?client_id=${FB_APP_ID}&client_secret=${FB_APP_SECRET}&grant_type=client_credentials`)
  .then(res => res.json())
  .then(({ access_token }) => {
    const images = []
    INSTAGRAM_IMAGE_IDS
      .split(',')
      .forEach(imageId =>
        images
          .push(
            fetch(`https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/${imageId}/&access_token=${access_token}&maxwidth=320&fields=thumbnail_url`)
          )
      )

    Promise
      .all(images)
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => {
        const imageUrls = []
        data.forEach(({ thumbnail_url }) => imageUrls.push(thumbnail_url))
        imageUrls.sort()
        fs.writeFileSync(
          './server/config/instagram.json',
          JSON.stringify(
            { imageUrls },
            null,
            2
          )
        )
      })
  })
