const express = require('express');
const passport = require('passport');
const router = express.Router();

const snapchatStrategy = require('./strategies/snapchat');

passport.use(snapchatStrategy);

router.use(passport.initialize());

module.exports = router;
