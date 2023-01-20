const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models');

const app = express();
const port = 3001;

const mongoDBAppConnectionURL =
  'mongodb+srv://juliozeledon:umWniG99Gl1mjMsE@dnaturebi.5ztmana.mongodb.net/dnaturedb?retryWrites=true&w=majority';

app.use(cors());

mongoose
  .connect(mongoDBAppConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error.reason));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/details', async (req, res) => {
  // const user = await userModel.findOne({id: 123});
  const user = await userModel.find({});
  res.send(user);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
