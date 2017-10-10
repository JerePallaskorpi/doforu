// Dependencies
const express       = require("express"),
      mysql         = require("mysql"),
      sql           = require("../modules/sql"),
      fs            = require("fs"),
      path          = require("path"),
      authCheck     = require("../middleware/auth"),
      router        = express.Router();

// Account page route
router.get("/edit-account", authCheck.isLoggedIn, (req, res) => {

  // Query variables
  const findUserData = sql.readFile("findUserData");
  const searchEmail = req.user.email;

  // Find user data to render on page
  sql.connection.query(findUserData, searchEmail, (error, results) => {
    if (error) { 
      console.log(error);
      res.redirect("back");
    } else {
      
      // Get some extra stuff if user is provider
      if (results[0].provider) {

        const findProviderData = "SELECT name, business_id FROM provider_detail WHERE user_id = ?";

        sql.connection.query(findProviderData, results[0].id, (error, providerResults) => {
          if (error) {
            console.log(error);
            res.redirect("back");
          } else {
            results[0].businessId = providerResults[0].business_id;
            results[0].companyName = providerResults[0].name;
            res.render("user/editAccount", {userData: results[0]});
          }
        });

      } else {
        res.render("user/editAccount", {userData: results[0]});
      }
      
    }
  });
});
