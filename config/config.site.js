const fs = require('fs');
const convict = require('convict');
const dateFormat = require('dateformat');

const config = convict({
  GOOGLE_ANALYTICS_ID: {
    doc: 'The application\'s Google Analytics Id.',
    format: String,
    env: 'GOOGLE_ANALYTICS_ID',
  },
  GOOGLE_MAPS_API_KEY: {
    doc: 'The application\'s Google Maps API Key',
    format: String,
    env: 'GOOGLE_MAPS_API_KEY',
  },
  GOOGLE_SITE_VERIFICATION: {
    doc: 'The application\'s Google Site Verification',
    format: String,
    env: 'GOOGLE_SITE_VERIFICATION',
  },
});

const localSiteConfig = './config/local.site.json';

if (fs.existsSync(localSiteConfig)) {
  config.loadFile([localSiteConfig]);
}

// --------------
// Environment vars.
const DESCRIPTION = 'On-line Portfolio and CV for Louw Swart - Analyst JavaScript Programmer based in Wellington, New Zealand';
const GOOGLE_ANALYTICS_ID = config.get('GOOGLE_ANALYTICS_ID');
const GOOGLE_MAPS_API_KEY = config.get('GOOGLE_MAPS_API_KEY');
const GOOGLE_SITE_VERIFICATION = config.get('GOOGLE_SITE_VERIFICATION');
const NAME = 'Louw Swart';
const TITLE = `${NAME} // Portfolio`;
const SITE_URL = 'https://portfolio.ouq77.kiwi/';

const now = new Date();

const META_TAGS = {
  facebook: {
    'og:description': DESCRIPTION,
    'og:image': `${SITE_URL}assets/images/icon.png`,
    'og:site_name': 'portfolio.ouq77.kiwi',
    'og:title': TITLE,
    'og:type': 'website',
    'og:updated_time': dateFormat(now, 'isoDateTime'),
    'og:url': SITE_URL,
  },
  google: {
    name: NAME,
    url: SITE_URL,
  },
  linkPreconnectTags: [
    '//fonts.gstatic.com',
    '//www.google-analytics.com',
  ],
  linkTags: {
    author: 'https://plus.google.com/u/0/+LouwSwart/posts',
    canonical: SITE_URL,
    publisher: 'https://plus.google.com/u/0/+LouwSwart',
  },
  site: {
    description: DESCRIPTION,
    'google-site-verification': GOOGLE_SITE_VERIFICATION,
    keywords: 'louw swart portfolio cv javascript ui developer analyst programmer java',
  },
  title: TITLE,
  twitter: {
    'twitter:card': 'summary',
    'twitter:creator': '@ouq77',
    'twitter:description': DESCRIPTION,
    'twitter:image': `${SITE_URL}assets/images/icon.png`,
    'twitter:site': '@ouq77',
    'twitter:title': TITLE,
  },
};

const APPLE_ICON_SIZES = [
  '57x57',
  '60x60',
  '72x72',
  '76x76',
  '114x114',
  '120x120',
  '144x144',
  '152x152',
  '180x180',
];

const GOOGLE_ACCOUNT = {
  analytics: GOOGLE_ANALYTICS_ID,
  maps_key: GOOGLE_MAPS_API_KEY,
};

const LAST_MOD_SITE = dateFormat(now, 'dd/mm/yyyy');
const LAST_MOD_SITEMAP = dateFormat(now, 'yyyy-mm-dd');
const LAST_MOD_TIME = +now;

module.exports = {
  META_TAGS,
  APPLE_ICON_SIZES,
  GOOGLE_ACCOUNT,
  LAST_MOD_SITE,
  LAST_MOD_SITEMAP,
  LAST_MOD_TIME,
}
