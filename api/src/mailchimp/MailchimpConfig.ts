const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  server: 'us21',
  apiKey: '7a362878c0e9604ebb7b8dfc5bdf12b9-us21',
});

export default mailchimp;
