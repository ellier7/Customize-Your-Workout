var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var _ = require('lodash');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//CORS support
	//expose API to urls accessing server (public API)
	//any server can access 
	//authentication needed
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//text
app.use("/hello", function(req, res, next){
	res.send("Hello World");
	next();
})

mongoose.connect('mongodb://localhost/mvp')
mongoose.connect('open', function(){
	console.log("Listening on port 3000")
	app.listen(3000);
})