require('dotenv').config();

const routes = require('./routes');
const Server = require('./server');
const { server, router } = Server;

Server.start();
// router.get('/', () => console.log('Hello Worlds!'));

// server.get('/', async (req, res) => {
//   // const user = await userModel.findOne({id: 123});
//   // const user = await userModel.find({});
//   console.log('Hello Worlds!');
//   res.send('some data');
// });

router.use('/api', routes);

// Will be called after the middleware
// server.get('/api', function (req, res) {
//   console.log('Time for middleware function: %d', Date.now());
//   res.send('Welcome to Tutorials Point');
// });
