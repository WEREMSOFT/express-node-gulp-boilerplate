
'use strict';

var express = require('express');
var app = express();
//var routes = require('./routes');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));



// var bulk = require('bulk-require');
// var routes = bulk(__dirname, [ './routes/api/**/*.js' ]);

require('./routes/')(app);




app.listen(port, function () {
	console.log('Listening on port ' + port);
});
