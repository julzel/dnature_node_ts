import mongoose, { ConnectOptions } from 'mongoose';

const dbConnect = async () => {
  const mongoDBAppConnectionURL = process.env.MONGODB_URI || '';

  try {
    await mongoose
      .connect(mongoDBAppConnectionURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      .then((res) => {
        console.log('Connected to DNATURE API Database - Initial Connection');
      })
      .catch((err) => {
        console.log(
          `Initial DNATURE API Database connection error occured -`,
          err
        );
      });
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`);
  }
};

export { dbConnect };
