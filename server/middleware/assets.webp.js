const webp = require('webp-middleware')
const { resolve } = require('path')

module.exports = webp(resolve(__dirname, '../../app'), {
  cacheDir: resolve(__dirname, '../../app/assets/webp', 'cache')
})
