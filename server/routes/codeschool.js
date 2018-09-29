const codeschoolJsonFeed = require('./../modules/codeschool.json.feed')

module.exports = (req, res) => {
  codeschoolJsonFeed.fetchFeed()
    .then(jsonResp => res.json(jsonResp))
    .catch(errors => res.status(400).json({ errors: errors }))
}
