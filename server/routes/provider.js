// Dependencies
const express       = require("express"),
      mysql         = require("mysql"),
      sql           = require("../modules/sql"),
      fs            = require("fs"),
      path          = require("path"),
      router        = express.Router();

// Account page route
router.get("/services", (req, res) => {
  
  if (res.locals.currentUser && res.locals.currentUser.provider) {

    // Query variables
    const findServices = sql.readFile("findOwnServices");
    const userId = res.locals.currentUser.id;

    // Find all the services that are found with service name or service tag
    sql.connection.query(findServices, userId, (error, results) => {
      if (error) { 
        console.log(error);
        res.redirect("back");
      } else { 
        console.log(results);
        res.render("provider/services", {results: results}); 
      }    
    });
    
  } else {
    res.redirect("/");
  }
  
});

module.exports = router;
