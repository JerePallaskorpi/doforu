// Dependencies
const express     = require("express"),
			app         = express(),
      stylus      = require("stylus"),
      nib         = require("nib"),
      bodyParser  = require("body-parser"),
      mysql       = require("mysql"),
      sqlConnection = require("./server/modules/sql"),
      config      = require("./config.json");

// Require Routes
const indexRoute    = require("./server/routes/index"),
      registerRoute = require("./server/routes/register");

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
app.use("/", indexRoute);
app.use("/", registerRoute);

// Server Connection
app.listen(config.development.port, () => {
   console.log("App running at localhost:" + config.development.port);
});

// SQL insert test
app.post("/services", (req, res) => {
  if (req.body.searchName != "") {
    const insertToSearch = "INSERT INTO search SET ?";
    const findServices = "SELECT * FROM service WHERE name LIKE ?";

    const name = {name: req.body.searchName};

    sqlConnection.query(insertToSearch, name, (error) => {
      if (error) { 
        throw error; 
      }
    });

    sqlConnection.query(findServices, ["%" + name.name + "%"], (error, results) => {
      if (error) { 
        throw error; 
      } else { 
        res.render("services", {results: results}); 
      }
    });
    
  } else {
    res.redirect("back");
  }
});

// Default route
app.get("*", (req, res) => {
  res.redirect("back");
});
