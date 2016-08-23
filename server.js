var express = require('express');
var app = express();
var mongojs = require('mongojs');
//URI needed for deployment
var db = mongojs(process.env.MONGODB_URI || 'videoList', ['videoList']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//mongojs find method returns entire collection
app.get('/videoList', function(req, res){
	db.videoList.find(function(err, docs){
		// console.log(docs);
		res.json(docs);
	})
});

//mongo insert function adds to req.body
app.post('/videoList', function(req, res){
	// console.log(req.body);
	db.videoList.insert(req.body, function(err, docs){
		res.json(docs);
	});
});

//remove by id
app.delete('/videoList/:id', function(req, res){
	var id = req.params.id;
	// console.log(id);
	db.videoList.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
});

//Apply a query and get one single document passed as a callback
//the callback receives (err, document)
app.get('/videoList/:id', function(req, res){
	var id = req.params.id;
	// console.log(id);
	db.videoList.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});


//put request to edit video information
app.put('/videoList/:id', function(req, res){
	var id = req.params.id;
	// find id that you want to edit
	//set next values
	//return the modified doc 
	db.videoList.findAndModify({
		query:{ _id:mongojs.ObjectId(id) },
		update: {
			$set: 
			{
				title: req.body.title, 
				url: req.body.url, 
				category: req.body.category
			}}, new: true}, function(err, doc){
			res.json(doc);
		}
	);

});

app.listen(process.env.PORT || 8000);
console.log("server listening on 8000");