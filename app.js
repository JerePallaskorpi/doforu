/*jshint esversion: 6 */

// Dependencies
const express = require("express"),
			app			= express(),
			jade 		= require("jade"),
      stylus  = require("stylus"),
      nib     = require("nib"),
      config  = require("./config.json");

// Routes
const indexRoutes = require("./routes/index");

function compile(str, path) {
  return stylus(str).set("filename", path).use(nib());
};

// Middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.use(stylus.middleware({
  src: __dirname + "/public",
  compile: compile
}));
app.use(express.static(__dirname + "/public"));

app.use("/", indexRoutes);

// Server connectionddd
app.listen(config.development.port, function(){
   console.log("DoForU running at " + config.development.port);
});
