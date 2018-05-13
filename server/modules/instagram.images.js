const path = require('path')
const {persist, getAbsoluteImagePath, isResizedImageExists} = require('./../helpers')

const relativeImagePath = 'assets/images/instagram'
const imageBasePath = path.resolve(__dirname, `../../app/${relativeImagePath}`)

const fetchInstaImages = (imageIds) => {
  const instagramPromises = []

  console.log(`ensuring ${imageIds.length} instagram images are cached`)

  imageIds.forEach((imageId, index) => {
    const imageName = `${imageId}.jpg`
    const imageUrl = `https://www.instagram.com/p/${imageId}/media/?size=m`
    const absoluteImagePath = getAbsoluteImagePath(imageBasePath, imageName)
    if (!isResizedImageExists(absoluteImagePath)) {
      console.log(`fetching (${index + 1}) ${imageUrl}`)
      instagramPromises.push(persist(imageUrl, absoluteImagePath))
    }
  })

  if (instagramPromises.length > 0) {
    console.log('waiting for fetches to complete')
  }

  return Promise.all(instagramPromises)
    .then(() => {
      console.log('all instagram images exist or have been fetched')
      return Promise.resolve('ready to start')
    })
}

module.exports.fetchInstaImages = fetchInstaImages
