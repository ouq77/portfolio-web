const { randomImages } = require('./../modules')

module.exports = async (req, res) =>
  res.json({ imageUrls: await randomImages.getImageUrls() })
