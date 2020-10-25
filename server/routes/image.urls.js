const { randomImages } = require('./../modules')

module.exports = (req, res) =>
  res.json({ imageUrls: randomImages.getImageUrls() })
