// Dependencies
const express       = require("express"),
      mysql         = require("mysql"),
      sql           = require("../modules/sql"),
      fs            = require("fs"),
      path          = require("path"),
      router        = express.Router();

// Account page route
router.get("/", (req, res) => {
  
  if (res.locals.currentUser) {
    res.render("account");
  } else {
    res.redirect("/");
  }
  
});

module.exports = router;
