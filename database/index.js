const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'platf0rm2020',
  database: 'Homes',
});

connection.connect();

module.exports = connection;
