var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require('./auth');

// expose this function to our app using module.exports
module.exports = function(passport) {
  passport.use(new GoogleStrategy({
    clientID        : configAuth.auth.clientID,
    clientSecret    : configAuth.auth.clientSecret,
    callbackURL     : configAuth.auth.callbackURL
  },
  function(token, refreshToken, profile, done) {
    console.log("user authenticated via google: " + profile.id);
    done(null, profile);
  }));
};
