module.exports = (req, res) => {
  if (req.body) {
    console.log(`CSP Violation: ${JSON.stringify(req.body)}`)
  } else {
    console.log('CSP Violation: No data received!')
  }

  res.status(204).end()
}
