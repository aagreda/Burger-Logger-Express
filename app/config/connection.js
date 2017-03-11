// Setup the code to connect Node to MySQL.
//==========================================================

//require mysql
var mysql = require("mysql");

//var source = { localhost:}
var source = {
	localhost: {
		port: 8080,
		host:"localhost",
		user: "root",
		password:"",
		database: "burgers_db"

	},
};

//var connection
var connection = mysql.createConnection(source.localhost);

//connection.connect
connection.connect(function(err){
	if(err){
		console.error("error connection: " + err.stack);
		return;
	}
	console.log("connected as id" + connection.threadId);
})

module.exports = connection;

// Export the connection.
//==========================================================