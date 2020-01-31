'use strict'

const mongoose = require('../database/Connection');

const ParticipantSchema = new mongoose.Schema({
  name: String,
  email: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Participants', ParticipantSchema);
