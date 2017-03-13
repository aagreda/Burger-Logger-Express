// Import (require) connection.js into orm.js
var connection = require("./connection.js");

//connection.connect
connection.connect(function(err){
	if(err){
		console.error("error connection: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

var orm = {
	// selectAll()
	getBurgers: function(tableName, callback){
		connection.query('SELECT * FROM burgers', function(err,result){
			if(err) throw err;
			callback(result);
		})
	},

	// insertOne()
	addBurger: function(burger, callback){
		var burgerName = burger;
		var mySQLQuery = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "')";
		connection.query(mySQLQuery, function(err, result){
			if(err)throw err;
			callback(result);
		})
	},

	// updateOne()
	updateBurger: function(burgerId, callback){
		var id = burgerId;
		connection.query("UPDATE burgers SET devoured=1 WHERE id=?", [id], function(err, result){
			if(err) throw err;
			callback(result);
		})
	},
}

// Export the ORM object in module.exports
module.exports = orm;