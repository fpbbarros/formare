'use strict'

const Participant = require('../models/Participant');

module.exports = {

  async index(req, res) {
    try {
      const participant = await Participant.find();
      res.status(200).json({ participant })
    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' });
    }
  },

  async show(req, res) {
    try {
      let participant = await Participant.findById({ _id: req.params.id });
      if (!participant) {
        return res.status(400).json({ message: 'Participant not found' });
      }
      return res.status(200).json(participant);
    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' });
    }
  },

  async store(req, res) {
    try {
      if (await Participant.findOne({ email: req.body.email })) {
        return res.status(400).json({ error: 'Participant already exists' });
      }
      const participant = await Participant.create(req.body);
      return res.status(200).json(participant);
    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' });
    }
  }

}