const mysql = require('mysql2');
const pwData = process.env.REACT_APP_SQLDB_PW;
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: pwData,
  database: 'fintech',
});

// simple query
connection.query('SELECT * from user', function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});
