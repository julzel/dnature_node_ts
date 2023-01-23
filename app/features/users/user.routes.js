const express = require('express');
const userController = require('./user.controller');
const router = express.Router();

// Handle user creation
router.post('/', userController.createUser);

// Handle user retrieval
router.get('/:id', userController.getUser);

// Handle user update
router.put('/:id', userController.updateUser);

// Handle user deletion
router.delete('/:id', userController.deleteUser);

module.exports = router;
