const mysql         = require("mysql"),
      sql           = require("../modules/sql");

module.exports = {
    isLoggedIn: (req, res, next) => {
        if(req.isAuthenticated()){
            return next();
        }
        req.flash("error", "Et ole kirjautunut sisään");
        res.redirect("/");
    },
    isProvider: (req, res, next) => {
      if (req.isAuthenticated() && res.locals.currentUser.provider) {
        return next();
      }
      req.flash("error", "Et ole palveluntarjoaja");
      res.redirect("/");
    },
    isOwnService: (req, res, next) => {
      if (req.isAuthenticated() && res.locals.currentUser.provider) {

        verifyId = "SELECT provider_id FROM service WHERE id = ? && provider_id = ?";
        userId = [req.params.id, res.locals.currentUser.id];

        console.log(userId);

        // Check if service id matches user id
        sql.connection.query(verifyId, userId, (error, results) => {
          if (results.length === 0) { 
            console.log(error);
            req.flash("error", "Et omista tätä palvelua");
            res.redirect("/");
          } else { 
            console.log(results);
            return next();
          }    
        });

      } else {
        req.flash("error", "Et omista tätä palvelua.");
        res.redirect("/");
      }
    }
};
