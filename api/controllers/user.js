const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username } = req.body;
  const password = req.password;
  const user = new User({ username, password });

  user.save((err, savedUser) => {
    if (err) {
      res.status(422);
      res.json({'A username and password are required': err.message})
    }
    res.json(savedUser);
  });
}
module.exports = {
  createUser
};
