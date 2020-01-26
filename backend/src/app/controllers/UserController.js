'use strict'

const User = require('../models/User');


module.exports = {


  async index(req, res) {

    try {
      const users = await User.find();
      res.status(200).json({ users });
    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' });
    }
  },

  async show(req, res) {

    try {

      let user = await User.findById({ _id: req.params.id });
      if (user) {
        res.status(200).json(user);
      }

    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' });
    }

  },

  async store(req, res) {

    try {

      if (await User.findOne({ email: req.body.email })) {
        return res.status(400).json({ error: "User already exists" });
      }

      const user = await User.create(req.body);
      user.password = undefined;
      return res.status(200).json({ user });

    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' });
    }
  },

  async put(req, res) {

    const { name, email } = req.body;


    try {
      await User.findByIdAndUpdate(req.params.id, {
        $set: {
          name,
          email
        }
      });

      return res.status(200).json({
        message: "User update",
        user: await User.findById(req.params.id)

      });

    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' });
    }

  },

  async del(req, res) {

    try {
      if (!await User.findOneAndDelete({ _id: req.params.id })) {
        return res.status(400).json({ error: 'User not found!' });
      }

      return res.status(200).json({ message: "OK!" });

    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' });
    }


  },

}
