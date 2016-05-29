var express = require('express');
var router = express.Router();


router.get('/api/products', function(req, res){
	res.json({
		response: 'Hello Products!'
	});
});

module.exports = router;