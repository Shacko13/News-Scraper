// Require dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// Set up port
var PORT = process.env.PORT || 3000;

// Create an instance of the express app
var app = express();

// Set up Express Router
var router = express.Router();

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// Connect handlebars to express app
app.engine("handlebars", expressHandlebars( {
	defaultlayout: "main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded( {
	extended: false
}));

// Requests go through router middleware
app.use(router);

// Use deployed database or local mogoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect mongoose to database
mongoose.connect(db, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Mongoose connection successful");
	}
});

// Listen on port
app.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
});
