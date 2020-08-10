const { resolve } = require('path')

module.exports = (req, res) =>
  res.sendFile(resolve(__dirname, '../../app/index.html'))
