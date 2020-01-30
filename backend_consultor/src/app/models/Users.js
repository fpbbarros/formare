'use strict'

const mongoose = require('../database/Connection');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: { type= String, required: true },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    level: {
        type: Number,
        default: 2
    }
});

UserSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

module.exports = mongoose.model('Users', UserSchema);
