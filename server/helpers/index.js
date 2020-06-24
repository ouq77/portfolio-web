const imagePath = require('./image.path')
const imagePersistence = require('./image.persistence')
const index = require('./index.hashes')
const mail = require('./mail')

module.exports = {
  getImageName: imagePath.getImageName,
  getResizedImageName: imagePath.getResizedImageName,
  getAbsoluteImagePath: imagePath.getAbsoluteImagePath,
  isImageExists: imagePath.isImageExists,
  persist: imagePersistence.persist,
  hashes: index.hashes,
  validate: mail.validate,
  buildMessage: mail.buildMessage,
  buildMessageCopy: mail.buildMessageCopy
}
