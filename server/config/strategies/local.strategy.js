const passport      = require("passport"),
      sql           = require("../../modules/sql"),
      sha256        = require("js-sha256").sha256,
      LocalStrategy = require("passport-local").Strategy;

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: "userEmail",
    passwordField: "userPassword"
  },
  (username, password, done) => {

    const findLoginUser = sql.readFile("findLoginUser");

    const loginInfo = {
      email: username,
      password: sha256(password)
    };

    const loginArr = [loginInfo.email, loginInfo.password];

    // Try to find user that matches email and password
    sql.connection.query(findLoginUser, loginArr, (error, results) => {
      if (error) { 
        console.log(error);
        done(null, false, {message: "ei"});
      } else {
        if (results.length > 0) {
          
          const user = {
            id: results[0].id,
            email: results[0].email,
            firstName: results[0].first_name,
            lastName: results[0].last_name,
            provider: results[0].provider
          };

          done(null, user); 
        } else {
          done(null, false, {message: "Nothing found"});
        }
        
      }
    });    
  }));
};
