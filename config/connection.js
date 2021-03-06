// Set up MySQL connection.
const mysql = require("mysql");
let connection;

require('dotenv').config();

if (process.env.RDS_CONNECTION_URL){
  connection = mysql.createConnection(process.env.RDS_CONNECTION_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "rdstest_db"
  });
};


console.log("connected to mysql on port: " + connection.config.port);
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
