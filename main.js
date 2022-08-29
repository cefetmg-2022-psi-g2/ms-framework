const dbHelper = require('./dbHelper');
dbHelper.init('./db.sqlite');
module.exports = dbHelper;