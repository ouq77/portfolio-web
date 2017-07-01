const path = require('path')

module.exports = (req, res) => {
  console.error(`No resource matches: ${req.url} [${req.headers['user-agent']}]`)
  res.status(404)
    .sendFile(path.resolve(__dirname, '../../app/404.html'))
}
