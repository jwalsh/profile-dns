var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send({
	id: "akscanb.id",
	digitally_signed_payload: "XXXXXXXXXXXXXXXXX"
  });
});

app.listen(3001, function () {
  console.log('Resolver listening on 3001');
});
