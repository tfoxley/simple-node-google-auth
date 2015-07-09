module.exports = {
  'paths': {
    'login': '/auth/google',
    'callback': '/auth/google/callback',
  },
  'auth': {
    'clientID': [your google auth Client ID],
    'clientSecret': [your google auth Client secret],
    'callbackURL': 'http://localhost:3000/auth/google/callback'
  }
};
