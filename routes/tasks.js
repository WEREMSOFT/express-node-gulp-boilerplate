var express = require('express');
var router = express.Router();


router.get('/api/tasks', function(req, res){
	res.json([
		{title: 'my Task', startTime: '9:00', endTime:'12:00', comment: 'this is odd'},
		{title: 'my Task', startTime: '9:00', endTime:'12:00', comment: 'this is odd'},
		{title: 'my Task', startTime: '9:00', endTime:'12:00', comment: 'this is odd'},
		{title: 'my Task', startTime: '9:00', endTime:'12:00', comment: 'this is odd'},
		{title: 'my Task', startTime: '9:00', endTime:'12:00', comment: 'this is odd'},
		{title: 'my Task', startTime: '9:00', endTime:'12:00', comment: 'this is odd'},
	]);
});

module.exports = router;