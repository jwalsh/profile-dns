var hashclient = require('hashapi-lib-node');
var figaro = require('figaro').parse(null, function(data) {
  console.log('figaro: ', data);
});

// figaroJSONPath can be null and in such case default location of figaro.json is used

console.log(figaro);
var access_token = '11111111111111111111';
var refresh_token = '00000000000000000000';
var hashClient = new hashclient(access_token, refresh_token);
