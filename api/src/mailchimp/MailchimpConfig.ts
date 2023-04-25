const mailchimp = require('@mailchimp/mailchimp_marketing');
require('dotenv').config();
const { SERVER, API_KEY } = process.env;

mailchimp.setConfig({
  server: SERVER,
  apiKey: API_KEY,
});

export default mailchimp;
