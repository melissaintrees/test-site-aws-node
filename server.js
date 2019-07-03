var express = require('express');
var bodyParser = require('body-parser');

var methodOverride = require('method-override');

var port = process.env.PORT || 3200;
console.log("connected to server on port: " + port);


var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false }));

// Setup Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var routes = require("./controllers/veggieburgers_controller.js");

app.use("/", routes);

app.listen(port);

