/**
 * Config file for passport.js
 */


var mongoose = require('mongoose')
  , LocalStrategy = require('passport-local').Strategy
  , Employee = mongoose.model('Employee');


module.exports = function (passport, config) {
  // require('./initializer')

  // serialize sessions
  passport.serializeUser(function(user, done) {
    done(null, user.email);
  });

  passport.deserializeUser(function(email, done) {
    Employee.findOne({ email: email }, function (err, user) {
      done(err, user);
    });
  });

  // use local strategy
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    function(email, password, done) {
      Employee.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Unknown user' });
        }
        if (!user.authenticate(password)) {
          return done(null, false, { message: 'Invalid password' });
        }
        return done(null, user);
      });
    }
  ));
 
};