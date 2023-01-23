const express = require('express');
const { signup, signin, signout } = require('./auth.controller');
const router = express.Router();

// Handle user sign up
router.post('/signup', signup);

// Handle user sign in
router.post('/signin', signin);

// Handle user sign out
router.get('/signout', signout);

module.exports = router;
