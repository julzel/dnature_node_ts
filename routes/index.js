const express = require('express');
const userRoutes = require('../app/features/users/user.routes');
const authRoutes = require('../app/features/auth/auth.routes');

const router = express.Router();
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;
