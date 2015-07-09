var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var passport = require('passport');

var cookieParser = require('cookie-parser');
var session      = require('express-session');


require('./config/passport')(passport);

passport.serializeUser(function(user, done) { done(null, user); });
passport.deserializeUser(function(obj, done) { done(null, obj); });

app.use(cookieParser());

app.use(session({ secret: 'thisissupersecret' }));
app.use(passport.initialize());
app.use(passport.session());

require('./app/routes.js')(app, passport);

app.listen(port);
console.log('Started server on port ' + port);
