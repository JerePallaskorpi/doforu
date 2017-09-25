// Dependencies
const express       = require("express"),
      mysql         = require("mysql"),
      sql           = require("../modules/sql"),
      fs            = require("fs"),
      path          = require("path"),
      passport      = require("passport"),
      faker         = require("faker"),
      router        = express.Router();

// Register user
router.post("/register", (req, res) => {

  const insertToUser = "INSERT INTO user SET ?";

  const registerInfo = {
    email: req.body.userEmail,
    password: req.body.userPassword,
    first_name: req.body.userFirstName,
    last_name: req.body.userLastName
  };

  sql.connection.query(insertToUser, registerInfo, (error) => {
    if (error) { 
      console.log(error);
      res.redirect("back");
    } else {
      passport.authenticate("local")(req, res, () => {
         req.flash("success", "Successfully Signed Up! Nice to meet you " + registerInfo.first_name);
         res.redirect("back");
      });
    }
  });
});

// Login user
router.post('/login', 
  passport.authenticate('local', { failureRedirect: 'back' }),
  function(req, res) {
    console.log(req.user);
    req.flash("success", "Succesfully logged in!");
    res.redirect('back');
  });

// Logout user
router.get("/logout", function(req, res){
  req.logout();
  req.flash("success", "Logged out.");
  res.redirect("back");
});

module.exports = router;
