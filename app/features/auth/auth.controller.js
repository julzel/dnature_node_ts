// import { Request, Response } from 'express';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../users/user.model');

const SECRET_KEY = process.env.SECRET_KEY;

async function signup(req, res) {
  const { name, email, password } = req.body;

  // Check if the email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(401).send({ error: 'Email already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const user = new User({ name, email, password: hashedPassword });
  await user.save();

  // Generate a JWT token
  const payload = { id: user._id, name: user.name, email: user.email };
  const token = jwt.sign(payload, SECRET_KEY);

  // Send the token as the response
  res.send({ token });
}

async function signin(req, res) {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send({ error: 'Invalid email or password' });
  }

  // Compare the hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send({ error: 'Invalid email or password' });
  }

  // Generate a JWT token
  const payload = { id: user._id, name: user.name, email: user.email };
  const token = jwt.sign(payload, SECRET_KEY);

  // Send the token as the response
  res.send({ token });
}

function signout(req, res) {
  res.clearCookie('access_token');
  res.json({ message: 'Successfully signed out' });
}

module.exports = { signup, signin, signout };
