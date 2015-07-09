# OAuth Credentials
In order for this example to work you need to have Google OAuth credentials.

1. Go to your [Google Developer Console](https://console.developers.google.com/project)
2. Select an existing Project or create new one.
3. Click on APIs & auth > Credentials
4. Click Create new Client ID
  a. Select Web application
  b. Authorized JavaScript origins: http://localhost:3000
  c. Authorized redirect URIs: http://localhost:3000/auth/google/callback
5. Add Client ID and Client secret to config > auth.js
