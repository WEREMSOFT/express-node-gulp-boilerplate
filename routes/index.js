console.log('cadorna');

var myRoutes = function(){
	var that = this;


	that.all('/api', function(req, res){
		res.send({cadorna: 'sarlanga'});
	})
}

module.exports = myRoutes;