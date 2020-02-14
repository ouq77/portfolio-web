const envConfig = require('../config/env.config').get()
const instagramImageIds = envConfig.INSTAGRAM_IMAGE_IDS
const customDomain = envConfig.CUSTOM_APP_DOMAIN

module.exports = (req, res) => {
  const domain = req.hostname === 'localhost' ? 'http://localhost:9000' : `https://${customDomain}`
  const response = `<script>
  const addImage = (domain, imageId) => {
    setTimeout(() => {
      const img = document.createElement("img")
      img.src = domain + "/assets/images/instagram/" + imageId + ".jpg"
      document.getElementById("images").appendChild(img)
    }, 250)
  }

  const instagramImageIds = "${instagramImageIds}"
  instagramImageIds.split(',').forEach((imageId) => {
    addImage("${domain}", imageId)
  })
</script>
<h3>Caching images at the edge</h3>
<div id="images"></div>
`
  res.set('Content-Type', 'text/html')
  res.send(Buffer.from(response))
}
