const { Pool, Client } = require('pg');

// const pool = new Pool({
//   user: 'root',
//   host: 'localhost',
//   database: 'homesdb',
//   password: 'abc2',
//   port: 3211,
// });
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'homesdb',
  password: 'abc2',
  port: 5432,
});
client.connect();
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

module.exports = client;