var express = require('express');
var app = express();
var http = require('http');

app.get('/', function (req, res) {
  var query = req.query;
  console.log(query);

  http.get({
        host: query.callback_url,
        path: '/' + query.id
  }, function(response) {
    console.log(response);
  });
  // Look up the provider and queue the signing request
  res.send({
	id: "akscanb.id",
	digitally_signed_payload: "XXXXXXXXXXXXXXXXX"
  });
});

app.listen(3001, function () {
  console.log('Resolver listening on 3001');
});
