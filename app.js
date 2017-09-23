
// Dependencies
const express       = require("express"),
			app           = express(),
      stylus        = require("stylus"),
      nib           = require("nib"),
      bodyParser    = require("body-parser"),
      config        = require("./config.json");

// Require Routes
const indexRoute          = require("./server/routes/index"),
      servicesRoute       = require("./server/routes/services"),
      serviceDetailRoute  = require("./server/routes/serviceDetail");
      authRoute           = require("./server/routes/auth");

// Stylus Compile
const compileStylus = (str, path) => {
  return stylus(str).set("filename", path).use(nib());
};

// Middlewares
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
app.use("/", authRoute);
app.use("/", servicesRoute);
app.use("/", serviceDetailRoute);

// Server Connection
app.listen(config.development.port, () => {
   console.log("App running at localhost:" + config.development.port);
});

// Default route
app.get("*", (req, res) => {
  res.render("404");
});
