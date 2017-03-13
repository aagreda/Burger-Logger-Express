//similar to api-routes file
var orm = require("../config/orm.js");

//functions that call orm code.
var burgerQueries = {
	//GET route for getting all of the burgers
	getBurgers: function(callback) {
		orm.getBurgers('burgers', function(res) {
			callback(res);
		});
	},

	//POST route for saving a new burger
	addBurger: function(burgerName, callback) {
		orm.addBurger(burgerName, function(res){
			callback(res);
		});
	},
	

	//PUT route for updating a burger
	updateBurger: function(burgerId, callback){
		orm.updateBurger(burgerId, function(res){
			callback(res);
		});
	},

	deleteBurger: function(burgerId, callback){
		orm.deleteBurger(burgerId, function(res){
			callback(res);
		});
	}

};

module.exports = burgerQueries;