const passport      = require("passport"),
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

    if (user.username == "admin") {
      done(null, user);
    } else {
      done(null, false, {message: "ei"});
    }
    
  }));
};
