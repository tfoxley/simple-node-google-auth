This is a very simple application that can be used as a starter project with Google authentication enabled.

###Usage
1. add your Google OAuth Credentials to the config/auth.js
2. run npm install - in root of the project
3. run node server.js - in root of the project
4. navigate to http://localhost:3000/no-biggie in the browser (this endpoint does not require auth)
5. navigate to http://localhost:3000/ in the browser (this endpoint requires auth)

### OAuth Credentials
In order for this example to work you need to have Google OAuth credentials.

1. Go to your [Google Developer Console](https://console.developers.google.com/project)
2. Select an existing Project or create new one.
3. Click on APIs & auth > Credentials
4. Click Create new Client ID
  a. Select Web application
  b. Authorized JavaScript origins: http://localhost:3000
  c. Authorized redirect URIs: http://localhost:3000/auth/google/callback
5. Add Client ID and Client secret to config > auth.js
