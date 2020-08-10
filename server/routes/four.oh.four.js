const { resolve } = require('path')

module.exports = (req, res) => {
  console.error(`No resource matches: ${req.url} [${JSON.stringify(req.headers)}]`)
  res.status(404)
    .sendFile(resolve(__dirname, '../../app/404.html'))
}
