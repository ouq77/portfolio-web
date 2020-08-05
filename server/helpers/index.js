const index = require('./hashes')
const mail = require('./mail')

module.exports = {
  hashes: index.hashes,
  validate: mail.validate,
  buildMessage: mail.buildMessage,
  buildMessageCopy: mail.buildMessageCopy
}
