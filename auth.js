const express = require('express');
const passport = require('passport');
const router = express.Router();

const snapchatStrategy = require('./strategies/snapchat');

function successHandler(req, res) {
    console.log('Successful authentication');
};

function errorHandler(er, req, res, next) {
    console.log('Failed to authenticate');
}

passport.use(snapchatStrategy);

router.use(passport.initialize());

// https://github.com/Snapchat/passport-snapchat/blob/master/README.md
router.get('/auth/snapchat',
  passport.authenticate('snapchat', { scope: ['user.display_name', 'user.bitmoji.avatar'] }));

router.get('/auth/snapchat/callback',
  passport.authenticate('snapchat', { failureRedirect: '/login' }), successHandler, errorHandler);

module.exports = router;
