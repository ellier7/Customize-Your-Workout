var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
var _ = require('lodash');


//create the application
var app = express();


//add middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(methodOverride('X-HTTP-Method-Override'));


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

 

//use -- tell express at /hello, call function
  //pass request, response obj, and 
  //go on to next middleware (next())
//server is responding
// app.use('/hello', function(req, res, next){
//  res.send("Hello World");
//  next(); //resp wont be sent without next
// });
app.use(express.static(__dirname + '/client'));

//connect to MongoDB
mongoose.connect('mongodb://localhost/practice');
mongoose.connection.once('open', function(){
  //load all models
    //assign to app -- pass around app obj 
    //& dependency inject to controller
      //allows controllers to have access to models
        //models do not know of controllers (MVC seperatiom)
    app.models = require('./models/index');
  //register routes
    //load routes (require)
    //iterate over all routes and assign value (movie controller)
    // as first callback and key (route) as second
    //pass to controller 
    //call controller, pass route & app and returns middleware
var routes = require('./routes');
  _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
  });

  console.log('Listening on port 3000...');
  app.listen(3000);
});









// var express = require('express');
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
// var _ = require('lodash');
// var apiRouter = require('./routes.js');
// var Video = require("./models/Videos");
// var app = express();

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());


// //CORS support
// 	//expose API to urls accessing server (public API)
// 	//any server can access 
// 	//authentication needed
// // app.use(function(req, res, next) {
// //   res.header('Access-Control-Allow-Origin', '*');
// //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// //   res.header('Access-Control-Allow-Headers', 'Content-Type');
// //   next();
// // });

// // app.get('/video', function(req, res) {
// //   res.send('hello world');
// // });

// // app.post('/video', function (req, res) {
// //   res.send('POST request to the homepage');
// // });

// // app.use(express.static(__dirname + '/'));

// // app.use('/video', apiRouter);

// app.get("/video", function(req, res) {
//   Video.find(function(err, videos) {
//     // res.send(videos.map((vid) => vid.url));
//     // console.log(vid.url);
//     console.log(videos.url);
//   });
// });

//   app.post("/video", function(req, res) {
//   res.send(req.body);
//   console.log(req.body);
// });




// /* Use local url if not in production */
// var dbURL = process.env.DBURL || "mongodb://localhost/workouts";

// /* Connect and handle errors */
// module.exports = mongoose.connect(dbURL, function(err) {
//   if (err) console.error(err);
//   app.listen(process.env.PORT || 3000);
//   console.log("Successfully connected to database");
// });
