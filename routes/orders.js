var express = require('express');
var router = express.Router();


router.get('/api/orders', function(req, res){
	res.json({
		response: 'hello!'
	});
});

module.exports = router;