const { existsSync } = require('fs')
const convict = require('convict')
const formats = require('convict-format-with-validator')

convict.addFormats({ email: formats.email, url: formats.url })

const envConfig = convict({
  BLOCKED_UA: {
    default: '',
    doc: 'User Agents to be blocked from accessing any resources',
    env: 'BLOCKED_UA',
    format: String
  },
  CUSTOM_APP_DOMAIN: {
    default: '',
    doc: 'The application\'s Custom App domain',
    env: 'CUSTOM_APP_DOMAIN',
    format: 'url'
  },
  FB_APP_ID: {
    default: '',
    doc: 'The application\'s Facebook App Id',
    env: 'FB_APP_ID',
    format: String
  },
  FB_APP_SECRET: {
    default: '',
    doc: 'The application\'s Facebook App Secret',
    env: 'FB_APP_SECRET',
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
  NODE_ENV: {
    default: 'production',
    doc: 'Node environment',
    env: 'NODE_ENV',
    format: String
  },
  PORT: {
    default: 9000,
    doc: 'The port to bind',
    env: 'PORT',
    format: 'port'
  }
})

const envLocalConfig = './server/config/env.local.json'

if (existsSync(envLocalConfig)) {
  envConfig.loadFile([envLocalConfig])
}

module.exports = envConfig
