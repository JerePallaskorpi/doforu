
const mysql = require("mysql");

const sqlConnection = mysql.createConnection({
  host      : "localhost",
  user      : "admin",
  password  : "admin",
  database  : "doforu"
});

module.exports = sqlConnection;
