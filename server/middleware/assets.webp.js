const webp = require('webp-middleware')
const path = require('path')

module.exports = webp(path.resolve(__dirname, '../../app'), {
  cacheDir: path.resolve(__dirname, '../../app/assets/webp', 'cache')
})
