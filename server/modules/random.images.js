const { imageUrls } = require('./../config/instagram.json')
const { IMAGE_DISPLAY_COUNT } = require('./../config/env.config').get()

const getImageUrls = () => {
  const reducedImageUrls = []
  const imageUrlsCopy = imageUrls.slice(0)

  if (imageUrls.length > IMAGE_DISPLAY_COUNT) {
    while (reducedImageUrls.length < IMAGE_DISPLAY_COUNT) {
      reducedImageUrls.push(imageUrlsCopy.splice(Math.floor(Math.random() * (imageUrlsCopy.length)), 1)[0])
    }
  } else {
    console.error(`Not enough image ids: ${imageUrls.length} of ${IMAGE_DISPLAY_COUNT} required`)
  }
  return reducedImageUrls
}

module.exports = {
  getImageUrls
}
