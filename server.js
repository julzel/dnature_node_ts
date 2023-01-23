const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToDb } = require('./config/db.config');

const server = express();
const router = express.Router();
const port = process.env.PORT || 3001;

const Server = {
  start: () => {
    server.use(cors());

    // Configuring body parser middleware
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    connectToDb();
    server.listen(port, () =>
      console.log(`DNAture backend server listening on ${port}!`)
    );
  },
};

Server.server = server;
Server.router = router;

module.exports = Server;
