var express = require('express');
var app = express();
var routes = require('./routes');

port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


app.listen(port, function(){
	console.log('Listening on port ' + port);
});