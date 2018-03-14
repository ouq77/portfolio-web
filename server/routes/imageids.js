const instagramImages = require('./../modules/instagram.images')
const randomImages = require('./../modules/random.images')

module.exports = (req, res) => {
  const randomImageIds = randomImages.getIds()

  instagramImages.fetchInstaImages(randomImageIds)
    .then(() => res.json({imageIds: randomImageIds}))
    .catch(errors => res.status(400).json({errors: errors}))
}
