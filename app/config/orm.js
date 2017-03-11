// Import (require) connection.js into orm.js
var connection = require("./connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var tableName = "burgers";
var orm = {
	// selectAll()
	getBurgers: function(callback){
		var s = "SELECT * FROM " + tableName;

		connection.query(s, function(err, result){
			console.log(result);
			callback(result);
		});
	},

	// insertOne()
	addBurger: function(burger, callback){
		var s = "INSERT INTO " + tableName + " (burger_name, devoured, date) VALUES (?,?,now())";
		burger.devoured = burger.devoured || false;
		connection.query(s, [
			burger.burger_name, burger.devoured
		], function(err, result){
			callback(result);
		});
	},

	// updateOne()
	updateBurger: function(burger, callback){
		var s = "UPDATE " + tableName + " (SET burger_name=?, devoured=? WHERE id=?)";

		connection.query(s, [
			burger.burger_name, burger.devoured, burger.id
		],function(err, result){
			callback(result);
		});
	},

}

// Export the ORM object in module.exports
module.exports = orm;