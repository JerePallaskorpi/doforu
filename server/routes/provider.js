// Dependencies
const express       = require("express"),
      mysql         = require("mysql"),
      sql           = require("../modules/sql"),
      fs            = require("fs"),
      path          = require("path"),
      authCheck     = require("../middleware/auth"),
      router        = express.Router();

// Account page route
router.get("/user/services", authCheck.isProvider, (req, res) => {

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
  
});

// Edit card
// Check that user owns the service
router.get("/services/:id/edit", authCheck.isOwnService, (req, res) => {

  // Query variables
  const findServices = sql.readFile("findServiceDetail");
  const findServiceReviews = sql.readFile("findServiceReviews");
  const id = req.params.id;

  // Call function that will find find reviews and service details
  find_reviews(function(result) {

    const reviews = result;

    // Find correct service with id
    sql.connection.query(findServices, id, (error, results) => {
      if (error) { 
        throw error; 
      } else { 
        res.render("provider/serviceEdit", {results: results[0], reviews: reviews}); 
      }
    });
  });

  // Find all reviews for service and pass results as callback
  function find_reviews(callback) {
    sql.connection.query(findServiceReviews, id, (error, results) => {
      if (error) { 
        throw error; 
      } else { 
        return callback(results);
      }
    });
  }

});

router.get("/services/:id/edit/getCardData", authCheck.isOwnService, (req, res) => {
  
  const findService = "SELECT * FROM service WHERE id = ?";

  sql.connection.query(findService, [req.params.id], (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log(results[0]);
      res.send(results[0]);
    }
  })
});

module.exports = router;
