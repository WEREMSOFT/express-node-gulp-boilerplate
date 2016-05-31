
'use strict';

var express = require('express');
var app = express();
require('dotenv').config();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

require('./routes/')(app);

console.log();

app.listen(port, function () {
	console.log('Listening on port ' + port);
});
