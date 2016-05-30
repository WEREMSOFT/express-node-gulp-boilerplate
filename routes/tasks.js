var express = require('express');
var router = express.Router();


router.get('/api/tasks', function(req, res){
	res.json([
		{title: 'Wash Dogs', startTime: '9:00', endTime:'12:00', comment: 'this is odd'},
		{title: 'Clean House', startTime: '9:00', endTime:'12:00', comment: 'this is odd'},
		{title: 'Make Food', startTime: '9:00', endTime:'12:00', comment: 'this is odd'},
		{title: 'See TV', startTime: '9:00', endTime:'12:00', comment: 'this is odd'},
		{title: 'Help Homework', startTime: '9:00', endTime:'12:00', comment: 'this is odd'},
		{title: 'Finish Him', startTime: '9:00', endTime:'12:01', comment: 'this is odd'}
	]);
});

module.exports = router;