var db = require('mongoose');

//schema
var VideoSchema = new db.Schema({
	"title": {
		type: String,
		required: true
	},
	"url": {
		type: String,
		required: true
	},
	"category": {
		type: String,
		required: true
	},	
})

module.exports = VideoSchema;