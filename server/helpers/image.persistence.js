const fetch = require('node-fetch')
const { chmodSync, writeFileSync } = require('fs')

const persist = (imageUrl, targetPath) => new Promise((resolve, reject) => {
  fetch(imageUrl)
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
