const User = require('./user.model');

const createUser = (req, res) => {
  console.log('hre');
  // const user = new User(req.body);
  // user
  //   .save()
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: err.message || 'Some error occurred while creating the User.',
  //     });
  //   });
  res.send('hola mundo');
};

const getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.id,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + req.params.id,
        });
      }
      return res.status(500).send({
        message: 'Error retrieving user with id ' + req.params.id,
      });
    });
};

const updateUser = (req, res) => {
  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + id,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'User not found with id ' + id,
        });
      }
      return res.status(500).send({
        message: 'Error updating user with id ' + id,
      });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found with id ' + id,
        });
      }
      res.send({ message: 'User deleted successfully!' });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'User not found with id ' + id,
        });
      }
      return res.status(500).send({
        message: 'Could not delete user with id ' + id,
      });
    });
};

module.exports = { createUser, getUser, updateUser, deleteUser };
