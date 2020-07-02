const index = require('./index.hashes')
const mail = require('./mail')

module.exports = {
  hashes: index.hashes,
  validate: mail.validate,
  buildMessage: mail.buildMessage,
  buildMessageCopy: mail.buildMessageCopy
}
