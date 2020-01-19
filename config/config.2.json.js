const jsonFile = require('jsonfile');
const {META_TAGS, GOOGLE_ACCOUNT, LAST_MOD_SITE, LAST_MOD_SITEMAP, LAST_MOD_TIME} = require('./config.site.js');

const file = './config/config.json';

const config2json = () => {
  const config = {
    META_TAGS,
    GOOGLE_ACCOUNT,
    LAST_MOD_SITE,
    LAST_MOD_SITEMAP,
    LAST_MOD_TIME,
  };
  jsonFile.writeFile(file, config, {spaces: 2}, (err) => {
    if (err) {
      console.error(`Error: ${err}`);
    }
  });
};

module.exports = config2json();
