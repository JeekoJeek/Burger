var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
	connection = MySQL.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
	host:"localhost",
	user: "root",
	password: "jack31094",
	database: "burgers_db"
});
};

connection.connect(function(error) {
	if (error)
		throw error;
});

module.exports = connection;