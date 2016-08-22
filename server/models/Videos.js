var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
var VideoSchema = new Schema({
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

// module.exports = mongoose.model('Video', VideoSchema);

module.exports = VideoSchema;