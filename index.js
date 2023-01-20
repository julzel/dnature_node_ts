const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models');

const app = express();
const port = process.env.PORT || 3001;

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

app.get('/', async (req, res) => {
  // const user = await userModel.findOne({id: 123});
  const user = await userModel.find({});
  res.send(user);
});

app.post('/login', (req, res) => {
  User.findOne(
    { email: req.body.email, password: req.body.password },
    (err, user) => {
      if (err) {
        res.status(500).send(err);
      } else if (!user) {
        res.status(401).send({ error: 'Invalid email or password' });
      } else {
        const payload = {
          id: user._id,
          name: user.name,
          email: user.email,
        };
        const token = jwt.sign(payload, SECRET_KEY);
        res.send({ token });
      }
    }
  );
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
