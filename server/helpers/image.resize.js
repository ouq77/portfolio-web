const sharp = require('sharp')
const { getImageName, getResizedImageName, getAbsoluteImageOriginalPath, getAbsoluteImageResizedPath } = require('./image.path.js')

const resize = (imageUrl, imageBasePath, width = 95, height = 95) =>
  new Promise((resolve, reject) => {
    const imageName = getImageName(imageUrl)
    const resizedImageName = getResizedImageName(imageName, width, height)
    const imageOriginalPath = getAbsoluteImageOriginalPath(imageBasePath, imageName)
    const imageResizedPath = getAbsoluteImageResizedPath(imageBasePath, resizedImageName)
    sharp(imageOriginalPath)
      .resize(width, height)
      .toFile(imageResizedPath, (err) => {
        if (err) {
          reject(err)
        }
        resolve()
      })
  })

module.exports = {
  resize
}
