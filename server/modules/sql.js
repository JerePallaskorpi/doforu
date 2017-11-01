
// Dependencies
const mysql = require("mysql");
const path = require("path");
const fs = require("fs");

// Create SQL connection
const sqlConnection = mysql.createConnection({
  host      : "localhost",
  user      : "root",
  password  : "admin",
  database  : "doforu"
});

// Path to SQL queries
const queries = path.join(__dirname, "../queries");

// Use this to read SQL queries from specified file name
const readFile = function readSqlFile(fileName) {
  return fs.readFileSync(`${queries}/${fileName}.sql`, "utf-8");
};

// Export
module.exports = {
  connection: sqlConnection,
  readFile: readFile
};
