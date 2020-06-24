const { existsSync } = require('fs')

const getImageName = imageUrl =>
  imageUrl.substr(imageUrl.lastIndexOf('/') + 1)

const getResizedImageName = (imageName, width = 95, height = 95) =>
  `${imageName.substr(0, imageName.lastIndexOf('.'))}.${width}x${height}${imageName.substr(imageName.lastIndexOf('.'))}`

const getAbsoluteImagePath = (imageBasePath, imageName) =>
  `${imageBasePath}/${imageName}`

const isImageExists = resizedImagePath =>
  existsSync(resizedImagePath)

module.exports = {
  getImageName,
  getResizedImageName,
  getAbsoluteImagePath,
  isImageExists: isImageExists
}
