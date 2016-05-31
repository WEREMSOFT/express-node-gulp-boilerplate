var express = require('express');
var request = require('request');
var router = express.Router();


router.get('/api/products', function (req, res) {
	var headers = {
		'Content-Type': 'application/json',
		'Authorization': process.env.CELERY_ACCESS_TOKEN
	};
	var options = {
		url: 'https://api.trycelery.com/v2/products',
		path: '/',
		headers: headers
	};
	request(options, function(error, response, body){
		res.json(JSON.parse(response.body));
	});
});

module.exports = router;