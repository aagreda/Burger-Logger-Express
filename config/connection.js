// Setup the code to connect Node to MySQL.
//==========================================================

//require mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password: "",
	database: "burgers_db"
});

//var connection


module.exports = connection;

// Export the connection.
//==========================================================