const mongoose = require('mongoose');

const connectToDb = () => {
  const mongoDBAppConnectionURL = process.env.MONGODB_URI;

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
};

module.exports = { connectToDb };
