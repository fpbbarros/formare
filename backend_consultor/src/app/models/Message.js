'use strict'

const mongoose = require('../database/connection');

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }

}, {
  timestamps: true
});


module.exports = mongoose.model('Messages', MessageSchema);
