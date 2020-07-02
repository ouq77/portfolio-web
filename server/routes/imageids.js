const randomImages = require('./../modules/random.images')

module.exports = (req, res) => {
  res.json({ imageIds: randomImages.getIds() })
}
