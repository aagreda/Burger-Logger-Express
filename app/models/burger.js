var orm = require("../config/orm.js");

//functions that call orm code.
module.exports = function(app) {
	//GET route for getting all of the burgers
	app.get("/api/burgers", function(req, res){
		orm.getBurgers(function(results){
			res.json(results);
		});
	});

	//POST route for saving a new burger
	//app.post()

	//PUT route for updating a burger
	//app.put()


}
