const withPlugins = require('next-compose-plugins');

const {
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
  GTAG,
} = process.env;

const env = {
  CANONICAL_URL: '',
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
  GTAG,
};

module.exports = withPlugins([
  {
    env,
  },
]);