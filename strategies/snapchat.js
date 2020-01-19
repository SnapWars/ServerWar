const SnapchatStrategy = require('passport-snapchat').Strategy;

module.exports = new SnapchatStrategy({
    clientID: process.env.SNAPCHAT_APP_ID,
    clientSecret: process.env.SNAPCHAT_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/snapchat/callback"
  },
  async (accessToken, refreshToken, profile, cb) => {
    // TODO: Process tokens & profile
  }
);
