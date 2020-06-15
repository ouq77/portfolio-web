const imagePath = require('./image.path')
const imagePersistence = require('./image.persistence')
const imageResize = require('./image.resize')
const index = require('./index.hashes')
const mail = require('./mail')

module.exports = {
  getImageName: imagePath.getImageName,
  getResizedImageName: imagePath.getResizedImageName,
  getAbsoluteImagePath: imagePath.getAbsoluteImagePath,
  getAbsoluteImageOriginalPath: imagePath.getAbsoluteImageOriginalPath,
  getAbsoluteImageResizedPath: imagePath.getAbsoluteImageResizedPath,
  getRelativeImageResizedPath: imagePath.getRelativeImageResizedPath,
  isResizedImageExists: imagePath.isResizedImageExists,
  persist: imagePersistence.persist,
  resize: imageResize.resize,
  hashes: index.hashes,
  validate: mail.validate,
  buildMessage: mail.buildMessage,
  buildMessageCopy: mail.buildMessageCopy
}
