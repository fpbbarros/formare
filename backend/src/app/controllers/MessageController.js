'use strict'

const Message = require('../models/Message');
const User = require('../models/User');


module.exports = {

  async index(req, res) {
    try {
      const messages = await Message.find();

      res.status(200).json({ messages });
    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' });
    }
  },

  async show(req, res) {

    try {

      let message = await Message.find({ user: req.params.id });

      if (message) {
        res.status(200).json(message);
      }

    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' });
    }

  },

  async store(req, res) {

    const user = await User.findById({ _id: req.params.id });
    const { message } = req.body;

    if (!user) {
      return res.status(400).json({ error: "User not exists" });
    }

    try {
      const msn = await Message.create({
        message,
        user: user._id,
      });

      return res.status(200).json({ msn });

    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' });
    }
  },

  async del(req, res) {

    try {
      if (!await Message.findOneAndDelete({ _id: req.params.id })) {
        return res.status(400).json({ error: 'Message not found!' });
      }
      return res.status(200).json({ message: "Message has been deleted!!" });

    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' });
    }
  },

}
