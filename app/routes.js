var configAuth = require('../config/auth');

module.exports = function(app, passport) {
  app.get('/', isLoggedIn, function(req, res) {
    res.send(JSON.stringify(req.user));
  });

  app.get('/no-biggie', function(req, res) {
    res.send('Nothing special here! Anyone can see this.');
  })

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get(configAuth.paths.login,
    passport.authenticate('google', {
      scope: 'https://www.googleapis.com/auth/plus.login'
    })
  );

  // the callback after user authentication
  app.get(configAuth.paths.callback,
    passport.authenticate('google', {
            successRedirect : '/',
            failureRedirect : '/'
    })
  );
};

function isLoggedIn(req, res, next) {
  console.log("Checking authentication");
  
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect(configAuth.paths.login);
}
