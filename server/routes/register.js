
const express       = require("express"),
      mysql         = require("mysql"),
      sql           = require("../modules/sql"),
      fs            = require("fs"),
      path          = require("path"),
      faker         = require("faker"),
      router        = express.Router();

// Register user
router.post("/register", (req, res) => {

  const insertToUser = "INSERT INTO user SET ?";

  const registerInfo = {
    email: req.body.registerEmail,
    password: req.body.registerPassword,
    first_name: req.body.registerFirstName,
    last_name: req.body.registerLastName
  };

  if (true) {}

  sql.connection.query(insertToUser, registerInfo, (error) => {
    if (error) { 
      console.log(error);
      res.redirect("back");
    } else {
      console.log("Registered user: " + registerInfo.email);
      res.redirect("back");
    }
  });
});

router.post("/login", (req, res) => {

  const findLoginUser = sql.readFile("findLoginUser");

  const loginInfo = {
    email: req.body.loginEmail,
    password: req.body.loginPassword
  };

  const loginArr = [loginInfo.email, loginInfo.password];

  if (loginArr[0] == "" || loginArr[1] == "") {
    console.log("Nothing was found");
    res.redirect("back");
  } else {
    sql.connection.query(findLoginUser, loginArr, (error, results) => {
      if (error) { 
        console.log(error);
        res.redirect("back");
      } else {
        if (results.length == 0) {
          console.log("Nothing was found");
          res.redirect("back");
        } else {
          console.log("Welcome " + results[0].first_name + " " + results[0].last_name + "!");
          res.redirect("back");
        }  
      }
    });
  }
  
});

module.exports = router;
