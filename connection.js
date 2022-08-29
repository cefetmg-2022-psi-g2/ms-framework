// Create a connection to the SQLITE database

const path = require("path");
const sqlite3 = require("sqlite3").verbose();
// Path to database file
const db_path = path.resolve(__dirname, process.env.DB_PATH);
// Database connection
const db = new sqlite3.Database(db_path, sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
		console.log("Error when creating the database connection, DB_PATH: " + db_path + "\nError code: " + err.message);
	} else {
		console.log("Connected to the database. | DB_PATH: " + db_path);
	}
});

module.exports = db;