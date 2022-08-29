// Create a connection to the SQLITE database
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

function initDb(path) {
	return new sqlite3.Database(path, sqlite3.OPEN_READWRITE, (err) => {
		if (err) {
			console.log("Error when creating the database connection, DB_PATH: " + path + "\nError code: " + err.message);
		} else {
			console.log("Connected to the database. | DB_PATH: " + path);
		}
	})
}

module.exports = initDb;