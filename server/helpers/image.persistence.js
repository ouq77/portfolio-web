const fetch = require('node-fetch')
const fs = require('fs')

const persist = (imageUrl, targetPath) => new Promise((resolve, reject) => {
  fetch(imageUrl)
    .then(res => res.buffer())
    .then(buffer => {
      fs.writeFileSync(targetPath, buffer)
      resolve()
    }).catch(err => reject(err))
})

module.exports = {
  persist
}
