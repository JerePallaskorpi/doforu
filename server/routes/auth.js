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
// router.post("/register", (req, res) => {

//   const insertToUser = "INSERT INTO user SET ?";

//   const registerInfo = {
//     email: req.body.userEmail,
//     password: req.body.ruserPassword,
//     first_name: req.body.userFirstName,
//     last_name: req.body.userLastName
//   };

//   if (true) {}

//   sql.connection.query(insertToUser, registerInfo, (error) => {
//     if (error) { 
//       console.log(error);
//       res.redirect("back");
//     } else {
//       console.log("Registered user: " + registerInfo.email);
//       res.redirect("back");
//     }
//   });
// });

router.post('/register', passport.authenticate('local', { failureRedirect: 'back' }), (req, res) => {

    const insertToUser = "INSERT INTO user SET ?";

    const registerInfo = {
      email: req.body.userEmail,
      password: req.body.userPassword,
      first_name: req.body.userFirstName,
      last_name: req.body.userLastName
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

router.post('/login', 
  passport.authenticate('local', { failureRedirect: 'back' }),
  function(req, res) {
    console.log(req.user);
    res.redirect('back');
  });

router.get("/logout", function(req, res){
   req.logout();
   res.redirect("/");
});

router.get("/auth/profile", (req, res) => {
  res.json(req.user);
});

// Login user
// router.post("/login", (req, res) => {

//   const findLoginUser = sql.readFile("findLoginUser");

//   const loginInfo = {
//     email: req.body.loginEmail,
//     password: req.body.loginPassword
//   };

//   const loginArr = [loginInfo.email, loginInfo.password];

//   // If email or password fields empty
//   if (loginArr[0] == "" || loginArr[1] == "") {
//     console.log("Nothing was found");
//     res.redirect("back");
//   } else {

//     // Try to find user that matches email and password
//     sql.connection.query(findLoginUser, loginArr, (error, results) => {
//       if (error) { 
//         console.log(error);
//         res.redirect("back");
//       } else {
//         if (results.length == 0) {
//           console.log("Nothing was found");
//           res.redirect("back");
//         } else {
//           console.log("Welcome " + results[0].first_name + " " + results[0].last_name + "!");
//           res.redirect("back");
//         }  
//       }
//     });
//   }
  
// });

module.exports = router;
