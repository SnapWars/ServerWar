const express = require('express');
const passport = require('passport');
const router = express.Router();

const snapchatStrategy = require('./strategies/snapchat');

passport.use(snapchatStrategy);

router.use(passport.initialize());

// https://github.com/Snapchat/passport-snapchat/blob/master/README.md
router.get('/auth/snapchat',
  passport.authenticate('snapchat', { scope: ['user.display_name', 'user.bitmoji.avatar'] }));

router.get('/auth/snapchat/callback',
  passport.authenticate('snapchat', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('Successful authentication');
  });

module.exports = router;
