const serveWebp = require('serve-webp')
const path = require('path')

module.exports = serveWebp({
  root: path.resolve(__dirname, '../../app'),
  cache: path.resolve(__dirname, '../../app/assets', 'webp')
})
