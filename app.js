/*jshint esversion: 6 */

// Dependencies
const express     = require("express"),
			app         = express(),
      stylus      = require("stylus"),
      nib         = require("nib"),
      bodyParser  = require("body-parser"),
      mysql       = require("mysql"),
      config      = require("./config.json");

// Require Routes
const indexRoutes = require("./server/routes/index");

// Stylus Compiler
const compileStylus = (str, path) => {
  return stylus(str).set("filename", path).use(nib());
};

// Express Config
app.set("views", __dirname + "/client/views");
app.set("view engine", "jade");
app.use(stylus.middleware({
  src: __dirname + config.paths.public,
  compile: compileStylus
}));
app.use(express.static(__dirname + config.paths.public));
app.use(bodyParser.urlencoded({ extended: false }));

// Define Routes
app.use("/", indexRoutes);

// Server Connection
app.listen(config.development.port, () => {
   console.log("App running at localhost:" + config.development.port);
});

// SQL server connection
const connection = mysql.createConnection({
  host      : "localhost",
  user      : "admin",
  password  : "admin",
  database  : "doforu"
});

// SQL insert test
app.post("/", (req, res) => {
  if (req.body.searchName != "") {
    const insertToSearch = "INSERT INTO search SET ?";
    const findServices = "SELECT * FROM service WHERE name LIKE ?";

    const name = {name: req.body.searchName};

    connection.query(insertToSearch, name, (error) => {
      if (error) { throw error; }
    });
    console.log(name);
    connection.query(findServices, ["%" + name.name + "%"], (error, results) => {
      if (error) { throw error; } else { res.render("services", {results: results}); }
    });

    
  } else {
  }
})
