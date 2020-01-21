const SnapchatStrategy = require('passport-snapchat').Strategy;

module.exports = new SnapchatStrategy({
    clientID: process.env.SNAPCHAT_CLIENT_ID,
    clientSecret: process.env.SNAPCHAT_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/snapchat/callback",
    profileFields: ['id', 'displayName', 'bitmoji']
  },
  async (accessToken, refreshToken, profile, cb) => {
    // TODO: Process tokens & profile
  }
);
