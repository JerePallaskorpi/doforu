
const   express = require("express"),
        mysql   = require("mysql"),
        sqlConnection = require("../modules/sql"),
        router  = express.Router();

// Register user
router.post("/register", (req, res) => {

  const insertToUser = "INSERT INTO user SET ?";

  const registerInfo = {
    email: req.body.registerEmail,
    password: req.body.registerPassword,
    first_name: req.body.registerFirstName,
    last_name: req.body.registerLastName
  };

  sqlConnection.query(insertToUser, registerInfo, (error) => {
    if (error) { 
      throw error; 
    } else {
      res.redirect("back");
    }
  });
});

module.exports = router;
