var mysql = require('mysql');

var connection = mysql.createConnection(
  process.env.JAWSDB_URL || {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'todos_db'
  }
);

module.exports = connection;
