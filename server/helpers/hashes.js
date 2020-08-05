const { readFileSync } = require('fs')
const htmlparser2 = require('htmlparser2')

const hashes = []

const parser = new htmlparser2.Parser(
  {
    onattribute (name, value) {
      if (name === 'integrity') {
        hashes.push(`'${value}'`)
      }
    }
  }
)

parser.write(readFileSync('./app/index.html').toString())
parser.end()

module.exports = {
  hashes
}
