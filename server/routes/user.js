// Dependencies
const express       = require("express"),
      mysql         = require("mysql"),
      sql           = require("../modules/sql"),
      fs            = require("fs"),
      path          = require("path"),
      router        = express.Router();

// Account page route
router.get("/edit-account", (req, res) => {
  
  if (res.locals.currentUser) {

    // Query variables
    const findUserData = sql.readFile("findUserData");
    const searchEmail = req.user.email;

    // Find user data to render on page
    sql.connection.query(findUserData, searchEmail, (error, results) => {
      if (error) { 
        console.log(error);
        res.redirect("back");
      } else {

        // if is user, then add some things
        // else do other things
        
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

    
  } else {
    res.redirect("/");
  }
  
});

module.exports = router;
