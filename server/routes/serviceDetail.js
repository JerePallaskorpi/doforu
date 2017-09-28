// Dependencies
const express       = require("express"),
      mysql         = require("mysql"),
      sql           = require("../modules/sql"),
      fs            = require("fs"),
      path          = require("path"),
      router        = express.Router();

// Service detail page
router.get("/:id", (req, res) => {

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
        res.render("serviceDetail", {results: results[0], reviews: reviews}); 
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

module.exports = router;
