const PROXY_CONFIG = [
  {
    context: [
      '/assets/images/instagram',
      '/imageids',
      '/railtrips',
    ],
    target: 'http://localhost:9000',
    secure: false,
    logLevel: 'debug',
  },
];

module.exports = PROXY_CONFIG;
