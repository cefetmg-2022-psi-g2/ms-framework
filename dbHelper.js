const initDb = require("./connection");
const dbHelper = {
	getAllLines: (table) => {
		return new Promise((resolve, reject) => {
			this.db.all(`SELECT * FROM ${table}`, (err, rows) => {
				if (err) {
					reject(err);
				}
				resolve(rows);
			});
		});
	},
	selectWhere: (table, where) => {
		return new Promise((resolve, reject) => {
			this.db.all(`SELECT * FROM ${table} WHERE ${where}`, (err, rows) => {
				if (err) {
					reject(err);
				}
				resolve(rows);
			});
		});
	},
	insertInto: (table, names, values) => {
		return new Promise((resolve, reject) => {
			this.db.all(`INSERT INTO 
			${table} (${names.join(', ')}) 
			VALUES(${values.map(d => `'${d}'`).join(',')})`, (err) => {
				if (err) {
					reject(err);
				}
				resolve({ "code": 'ok' });
			});
			// a função map coloca cada item de $values entre aspas
		})
	},
	customQuery: (sql, params) => {
		return new Promise((resolve, reject) => {
			this.db.all(sql, params, (err, rows) => {
				if (err) {
					reject(err);
				}
				resolve(rows);
			});
		});
	},
	init: (path) => {
		this.db = initDb(path);
	}
};

module.exports = dbHelper;