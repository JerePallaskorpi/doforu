
const express       = require("express"),
      mysql         = require("mysql"),
      sql           = require("../modules/sql"),
      fs            = require("fs"),
      path          = require("path"),
      router        = express.Router();

router.get("/services", (req, res) => {
  if (req.query.searchName != "") {
    const insertToSearch = sql.readFile("insertSearch");
    const findServices = sql.readFile("findServices");

    const searchName = {name: req.query.searchName};
    const name = "%" + searchName.name + "%";
    const nameArray = [name, name];

    sql.connection.query(insertToSearch, searchName, (error) => {
      if (error) { 
        console.log(error);
        res.redirect("back");
      }
    });

    sql.connection.query(findServices, nameArray, (error, results) => {
      if (error) { 
        console.log(error);
        res.redirect("back");
      } else { 

        if (results.length > 10) {
          res.render("services", {resultAmount: results.length, results: results.splice(0,10), searchName: searchName}); 
        } else {
          res.render("services", {resultAmount: results.length, results: results, searchName: searchName}); 
        }
        
      }
    });
    
  } else {
    res.redirect("back");
  }
});

module.exports = router;
