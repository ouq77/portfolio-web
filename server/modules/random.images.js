const envConfig = require('./../config/env.config').get()

const imageIds = envConfig.INSTAGRAM_IMAGE_IDS.split(',')
const imageDisplayCount = envConfig.IMAGE_DISPLAY_COUNT

const getIds = () => {
  const reducedImageIds = []
  const imageIdsCopy = imageIds.slice(0)

  if (imageIds.length > imageDisplayCount) {
    while (reducedImageIds.length < imageDisplayCount) {
      reducedImageIds.push(imageIdsCopy.splice(Math.floor(Math.random() * (imageIdsCopy.length)), 1)[0])
    }
  } else {
    console.error(`Not enough image ids: ${imageIds.length} of ${imageDisplayCount} required`)
  }
  return reducedImageIds
}

module.exports.getIds = getIds
