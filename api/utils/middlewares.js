const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/userModels');
const { mysecret } = require('../../config');
const SaltRounds = 11;

const authenticate = (req, res, next) => {
  const token = req.get('Authorization');
  if (token) {
    jwt.verify(token, mysecret, (err, decoded) => {
      if (err) return res.status(422).json(err);
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).json({
      error: 'No token provided, must be set on the Authorization Header'
    });
  }
};

const encryptUserPW = (req, res, next) => {
  const { username, password } = req.body;

  if (!username) {
    sendUserError('Please input a username', res);
    return;
  }
  if (!password) {
    sendUserError('Please input a password', res);
    return;
  }
  bcrypt.hash(password, SaltRounds).then(pass => {
    req.password = pass;
    next();
  })
  .catch(err => {
    sendUserError({ message: 'encryptUserPW Catch Error' });
  })
};

const compareUserPW = (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then((user) => {
      bcrypt.compare(password, user.password).then((compareOutput) => {
        if (!compareOutput) sendUserError({ message: 'User does not have access'});
        req.username=user.username;
        next();
      })
      .catch(err => {
        sendUserError({ message: 'CompareUserPW Catch Error' });
      })
    })
};

module.exports = {
  authenticate,
  encryptUserPW,
  compareUserPW
};
