'use strict'

const bcrypt = require('bcryptjs');
const User = require('../models/Users');
const jsonWebToken = require('jsonwebtoken');
const authConfig = require('../config/Auth.json');

module.exports = {


  async auth(req, res) {

    const user = await User.findOne({ email: req.body.email }).select('+password');

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    if (!await bcrypt.compare(req.body.password, user.password)) {
      return res.status(400).json({ message: 'Invalid password' })
    }

    user.password = undefined;
    const token = jsonWebToken.sign({ id: user._id }, authConfig.secret, {
      expiresIn: 86400
    })

    return res.status(200).json({ user, token });

  }

}