'use strict';

var bulk = require('bulk-require');
//var routes = bulk(__dirname, [ 'api/**/*.js' ]);

var orders = require(__dirname + '/orders');
var products = require(__dirname + '/products');




var returnValue = function(app)
{
	var normalizedPath = __dirname;//require("path").join(__dirname, "./api");

	require("fs").readdirSync(normalizedPath).forEach(function(file) {
		if(file != 'index.js'){
			app.use(require(__dirname + '/' + file));
		}
	});
};



module.exports = returnValue;