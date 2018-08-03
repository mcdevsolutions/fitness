const express = require('express');
var UmbracoHeadless = require('umbraco-headless');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;
// this will change when proper token authentication is added
var config = {
  url: 'https://martins-willing-puppy.s1.umbraco.io',
  username: 'martinmacdonald1@live.co.uk',
  password: 'Incorrect13790',
  imageBaseUrl: 'https://martins-willing-puppy.s1.umbraco.io'
};
var headlessService = new UmbracoHeadless.HeadlessService(config);
headlessService.authenticate();
app.get('/api/hello', (req, res) => {
  headlessService.getById(1052).then(value => {
    console.log(value);
    res.send({ express: value });
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
