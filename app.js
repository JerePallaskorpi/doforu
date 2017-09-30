// Dependencies
const express       = require("express"),
			app           = express(),
      stylus        = require("stylus"),
      nib           = require("nib"),
      bodyParser    = require("body-parser"),
      path          = require("path"),
      cookieParser  = require("cookie-parser"),
      session       = require("express-session"),
      passport      = require("passport"),
      flash         = require("connect-flash"),
      config        = require("./config.json");

// File paths
const pathRoutes  = path.join(__dirname, config.paths.routes);
const pathViews   = path.join(__dirname, config.paths.views);
const pathPublic  = path.join(__dirname, config.paths.public);
const pathConfig  = path.join(__dirname, config.paths.config);

// Require Routes
const indexRoute          = require(pathRoutes + "/index"),
      servicesRoute       = require(pathRoutes + "/services"),
      serviceDetailRoute  = require(pathRoutes + "/serviceDetail");
      userRoute           = require(pathRoutes + "/user");
      providerRoute       = require(pathRoutes + "/provider");
      authRoute           = require(pathRoutes + "/auth");

// Stylus Compile
const compileStylus = (str, path) => {
  return stylus(str).set("filename", path).use(nib());
};

// Middlewares
app.set("views", pathViews);
app.set("view engine", "jade");
app.use(stylus.middleware({
  src: pathPublic,
  compile: compileStylus
}));
app.use(express.static(pathPublic));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ 
  secret: "anything",
  resave: false,
  saveUninitialized: false
}));
require(pathConfig + "/passport")(app);
app.use(flash());

// Pass currentuser to all routes
app.use((req, res, next) => {
   res.locals.currentUser = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});

// Define Routes
app.use("/", indexRoute);
app.use("/", authRoute);
app.use("/user", userRoute);
app.use("/user", providerRoute);
app.use("/services/", servicesRoute);
app.use("/services/", serviceDetailRoute);

// Server Connection
app.listen(config.development.port, () => {
  console.log("\r\n----------");
  console.log("App running at localhost:" + config.development.port);
  console.log("----------\r\n");
});

app.get("/getCardData", (req, res) => {

  console.log(req);
  console.log(res);

  let todos = [
    "Otsikko",
    "Pitempi description en jaksa tehä lorem ipsumii",
    450
  ];

  res.send(todos);
});

// Default route
app.get("*", (req, res) => {
  res.render("404");
});
