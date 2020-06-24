const { existsSync } = require('fs')
const convict = require('convict')
const formats = require('convict-format-with-validator')

convict.addFormats({ email: formats.email, url: formats.url })

const envConfig = convict({
  PORT: {
    default: 9000,
    doc: 'The port to bind',
    env: 'PORT',
    format: 'port'
  },
  PRE_RENDER_TOKEN: {
    default: '',
    doc: 'The application\'s Pre-render token',
    env: 'PRE_RENDER_TOKEN',
    format: String
  },
  GMAIL_SENDER_EMAIL: {
    default: '',
    doc: 'The application\'s Sender Email, incl. name',
    env: 'GMAIL_SENDER_EMAIL',
    format: String
  },
  GMAIL_APP_EMAIL: {
    default: '',
    doc: 'The application\'s Gmail Email account',
    env: 'GMAIL_APP_EMAIL',
    format: 'email'
  },
  GMAIL_APP_PASSWORD: {
    default: '',
    doc: 'The application\'s Gmail Email password',
    env: 'GMAIL_APP_PASSWORD',
    format: String
  },
  CUSTOM_APP_DOMAIN: {
    default: '',
    doc: 'The application\'s Custom App domain',
    env: 'CUSTOM_APP_DOMAIN',
    format: 'url'
  },
  INSTAGRAM_IMAGE_IDS: {
    default: '',
    doc: 'The application\'s Instagram Image Ids',
    env: 'INSTAGRAM_IMAGE_IDS',
    format: String
  },
  IMAGE_DISPLAY_COUNT: {
    default: 75,
    doc: 'The number of images to fetch',
    env: 'IMAGE_DISPLAY_COUNT',
    format: Number
  },
  USE_HPKP: {
    default: false,
    doc: 'Whether to use HTTP Public Key Pinning or not',
    env: 'USE_HPKP',
    format: Boolean
  },
  BLOCKED_UA: {
    default: '',
    doc: 'User Agents to be blocked from accessing any resources',
    env: 'BLOCKED_UA',
    format: String
  }
})

const envLocalConfig = './server/config/env.local.json'

if (existsSync(envLocalConfig)) {
  envConfig.loadFile([envLocalConfig])
}

module.exports = envConfig
