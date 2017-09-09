/*jshint esversion: 6 */

// Dependencies
const express     = require("express"),
			app         = express(),
      stylus      = require("stylus"),
      nib         = require("nib"),
      bodyParser  = require("body-parser"),
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

// Define Routes
app.use("/", indexRoutes);

// Server Connection
app.listen(config.development.port, () => {
   console.log("App running at localhost:" + config.development.port);
});
