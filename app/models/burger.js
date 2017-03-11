var orm = require("../config/orm.js");

//functions that call orm code.
module.exports = function(app) {
	//GET route for getting all of the burgers
	app.get("/", function(req, res){
		orm.getBurgers(function(results){
			res.json(results);
		});
	});

	//POST route for saving a new burger
	app.post("/", function(req,res){
		orm.addBurger(req.body, function(results){
			res.json(results).status(200);
		});
	});

	//PUT route for updating a burger
	app.put("/", function(req, res){
		orm.updateBurger(req.body, function(results){
			res.json(results).status(200);
		});
	});
};
