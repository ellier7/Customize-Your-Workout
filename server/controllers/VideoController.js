//converts mongoose model to rest API
	//create model & leave the rest to node restful
		//creates CRUD
var restful = require('node-restful');

module.exports = function(app, route){

	//Set up the controller for rest
	var rest = restful.model(
		'video',
		app.models.video
		).methods(['get', 'post']);

	//register endpoint 
	rest.register(app, route);

	return function(req, res, next){
		next();
	};
};