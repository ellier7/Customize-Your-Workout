var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('videoList', ['videoList']);
var bodyParser = require('body-parser');

// app.get('/', function(req, res){
// 	res.send("hello world");
// });


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/videoList', function(req, res){
	// console.log("I received the get request");
	db.videoList.find(function(err, docs){
		// console.log(docs);
		res.json(docs);
	})
});


app.post('/videoList', function(req, res){
	// console.log(req.body);
	db.videoList.insert(req.body, function(err, docs){
		res.json(docs);
	});
});


app.delete('/videoList/:id', function(req, res){
	var id = req.params.id;
	// console.log(id);
	db.videoList.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
});

app.get('/videoList/:id', function(req, res){
	var id = req.params.id;
	// console.log(id);
	db.videoList.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});


app.put('/videoList/:id', function(req, res){
	var id = req.params.id;
	db.videoList.findAndModify({
		query:{_id:mongojs.ObjectId(id)},
		update: {$set: {title: req.body.title, url: req.body.url, category: req.body.category}},
		new: true}, function(err, docs){
			res.json(docs);
		}
	);

});


app.listen(3000);
console.log("server listening on 3000");