// load variables from .env file
import * as dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes';
import { dbConnect } from './database';

// Create a new express app instance
const server: Express = express();

server.use(cors());

// Configuring body parser middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Configuring routes
server.use('/api', Routes);

// Connect to MongoDB
dbConnect();

// Start the server
server.listen(3001, function () {
  console.log('App is listening on port 3001!');
});
