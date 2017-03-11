//DEPENDENCIES
//=================================================================================
//REQUIRE:
//express
var express = require("express");
//body-parser
var bodyParser = require("body-parser");
//method-override
var methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));


// Routes =============================================================

require("./app/models/burger.js")(app);
// require("./routes/api-routes.js")(app);

// Starting our express app
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




