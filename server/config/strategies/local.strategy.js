const passport      = require("passport"),
      sql           = require("../../modules/sql"),
      LocalStrategy = require("passport-local").Strategy;

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: "userEmail",
    passwordField: "userPassword"
  },
  (username, password, done) => {
    var user = {
      username: username,
      password: password
    };

    const findLoginUser = sql.readFile("findLoginUser");

    const loginInfo = {
      email: username,
      password: password
    };

    const loginArr = [loginInfo.email, loginInfo.password];

    // Try to find user that matches email and password
    sql.connection.query(findLoginUser, loginArr, (error, results) => {
      if (error) { 
        console.log(error);
        done(null, false, {message: "ei"});
      } else {
        if (results.length > 0) {
          done(null, user); 
        } else {
          done(null, false, {message: "Nothing found"});
        }
        
      }
    });    
  }));
};
