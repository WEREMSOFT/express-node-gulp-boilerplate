var express = require('express');
var request = require('request');
var router = express.Router();


router.get('/api/products', function (req, res) {
	var headers = {
		'Content-Type': 'text/html; charset=utf-8',
	};
	var options = {
		url: 'https://ar.search.yahoo.com/search?p=cadorna&fr=yfp-t-726',
		headers: headers
	};
	request(options, function(error, response, body){
		res.send(response.body);
	});
});

module.exports = router;