const { readFileSync } = require('fs')
const envConfig = require('./../config/env.config').get()

const DISALLOWED_CHARS = /[<>^|%()&+]/
const URL_REGEX = /\(?(?:(http|https|ftp):\/\/)(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.#]*)?([\.]{1}[^\s\?#]*)?)?(?:\?{1}([^\s\n#\[\]]*))?([#][^\s\n]*)?\)?/ // eslint-disable-line no-useless-escape
const EMAIL_REGEX = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ // eslint-disable-line no-useless-escape

const GMAIL_SENDER_EMAIL = envConfig.GMAIL_SENDER_EMAIL
const CUSTOM_APP_DOMAIN = envConfig.CUSTOM_APP_DOMAIN
const SUBJECT = 'Message from {0} | ' + CUSTOM_APP_DOMAIN
const SUBJECT_COPY = 'Thanks for getting in touch'
const CONTENT = readFileSync('./server/config/email-template.html')
const CONTENT_COPY = readFileSync('./server/config/email-copy-template.html')

/**
 * Formats a value with the args passed in
 * @param {string} value
 * @param {Array} args
 * @returns {string} formatted value
 */
const formatValue = (value, args) => {
  return value.replace(/{(\d+)}/g, (match, number) => {
    return typeof args[number] !== 'undefined'
      ? args[number] : match
  })
}

const containsDisallowedChars = (value) => {
  return DISALLOWED_CHARS.test(value)
}

const containsUrl = (value) => {
  return URL_REGEX.test(value)
}

const isValidEmail = (email) => {
  return EMAIL_REGEX.test(email)
}

/**
 * Accepts a submission and validates the content
 * @param {Object} submission
 * @param {string} submission.name
 * @param {string} submission.email
 * @param {string} submission.text
 * @param {string} submission.heuning
 *
 * @return {Array} one or more errors, or empty array if none
 */
const validate = (submission) => {
  const response = []
  let isUrl = false

  if (submission.heuning) {
    response.push('e_spam')
    return response
  }

  if (!submission.name) {
    response.push('e_name_required')
  } else if (containsDisallowedChars(submission.name)) {
    response.push('e_name_disallowed_chars')
  } else if (containsUrl(submission.name)) {
    isUrl = true
  }
  if (!submission.email) {
    response.push('e_email_required')
  } else if (!isValidEmail(submission.email)) {
    response.push('e_email_invalid')
  }
  if (!submission.text) {
    response.push('e_message_required')
  } else if (containsDisallowedChars(submission.text)) {
    response.push('e_message_disallowed_chars')
  } else if (containsUrl(submission.text)) {
    isUrl = true
  }

  if (isUrl) {
    response.push('e_contains_url')
  }

  return response
}

/**
 * Accepts a submission and builds a message for sending
 * @param {Object} submission
 * @param {string} submission.name
 * @param {string} submission.email
 * @param {string} submission.text
 *
 * @return {Object} message
 * {string} message.replyTo
 * {string} message.to
 * {string} message.subject
 * {string} message.html
 */
const buildMessage = (submission) => {
  const message = {
    replyTo: submission.name + ' <' + submission.email + '>', // sender address
    to: GMAIL_SENDER_EMAIL, // list of receivers
    subject: '' + SUBJECT, // Subject line
    html: '' + CONTENT // html body
  }

  message.subject = formatValue(message.subject, [submission.name])
  message.html = formatValue(message.html, [submission.name, submission.email, submission.text.replace(/\n/g, '<br>')])

  return message
}

/**
 * Accepts a submission and builds a copy for sending to the sender
 * @param {Object} submission
 * @param {string} submission.name
 * @param {string} submission.email
 * @param {string} submission.text
 *
 * @return {Object} message
 * {string} message.to
 * {string} message.subject
 * {string} message.html
 */
const buildMessageCopy = (submission) => {
  const message = {
    to: submission.name + ' <' + submission.email + '>', // list of receivers
    subject: '' + SUBJECT_COPY, // Subject line
    html: '' + CONTENT_COPY // html body
  }

  message.html = formatValue(message.html, [submission.name])

  return message
}

module.exports = {
  validate,
  buildMessage,
  buildMessageCopy
}
