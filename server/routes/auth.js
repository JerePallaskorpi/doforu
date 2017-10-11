// Dependencies
const express       = require("express"),
      mysql         = require("mysql"),
      sql           = require("../modules/sql"),
      fs            = require("fs"),
      path          = require("path"),
      passport      = require("passport"),
      faker         = require("faker"),
      sha256        = require("js-sha256").sha256,
      router        = express.Router();

// Register user
router.post("/register", (req, res) => {

  const insertToUser = "INSERT INTO user SET ?";
  const insertToProviderDetail = sql.readFile("insertProviderDetailRegister");

  const registerInfo = {
    email: req.body.userEmail,
    password: req.body.userPassword,
    first_name: req.body.userFirstName,
    last_name: req.body.userLastName,
    provider: req.body.providerCheck ? true : false
  };

  const providerInfo = {
    businessId: req.body.businessId || null,
    companyName: req.body.companyName || null
  };

  if (registerInfo.password === req.body.userPasswordAgain) {
    registerInfo.password = sha256(registerInfo.password);
    sql.connection.query(insertToUser, registerInfo, (error) => {
      if (error) { 
        console.log(error);
        res.redirect("back");
      } else {

        // Insert provider details
        if (registerInfo.provider) {

          providerInfoArray = [providerInfo.companyName, providerInfo.businessId, registerInfo.email];
          sql.connection.query(insertToProviderDetail, providerInfoArray, (error) => {
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
        } else {
          passport.authenticate("local")(req, res, () => {
             req.flash("success", "Successfully Signed Up! Nice to meet you " + registerInfo.first_name);
             res.redirect("back");
          });
        }     
      }
    });
  } else {
    res.redirect("back");
  }
  
});

// Login user
router.post('/login', 
  passport.authenticate('local', { failureRedirect: 'back' }),
  (req, res) => {
    req.flash("success", "Succesfully logged in!");
    res.redirect('back');
  });

// Logout user
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success", "Logged out.");
  res.redirect("back");
});

module.exports = router;
