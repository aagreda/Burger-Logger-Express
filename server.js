//DEPENDENCIES
//=================================================================================
//REQUIRE:
//express
var express = require("express");
//body-parser
var bodyParser = require("body-parser");
//method-override
var methodOverride = require("method-override");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout:"main"}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, './views/layouts/public')));


var route = require('./controllers/burgers_controller.js');
app.use('/', route);
app.use('/create', route);
app.use('/update', route);


var PORT = 3000;

// Starting our express app
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




