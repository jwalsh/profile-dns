var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Sending request to callback');
});

app.listen(3001, function () {
  console.log('Resolver listening on 3001');
});
