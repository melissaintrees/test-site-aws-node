var express = require('express');
var bodyParser = require('body-parser');

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


var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});