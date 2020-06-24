const fetch = require('node-fetch')
const { chmodSync, writeFileSync } = require('fs')

const persist = (imageUrl, targetPath) => new Promise((resolve, reject) => {
  fetch(imageUrl, {
    method: 'GET',
    headers: {
      Accept: 'image/webp',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36'
    }
  })
    .then(res => res.buffer())
    .then(buffer => {
      writeFileSync(targetPath, buffer, 'buffer')
      chmodSync(targetPath, '0755')
      resolve()
    }).catch(err => reject(err))
})

module.exports = {
  persist
}
