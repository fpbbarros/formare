'use strict'

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const Authenticate = require('../Authenticate');



module.exports = {

    async store(req, res) {

        const { email, password } = req.body;

        let user = await User.findOne({ email }).select("+password");

        if (!user) {

            return res.status(400).json({ message: "user not found" })
        }

        if (await bcrypt.compare(password, user.password)) {
            user.password = undefined;

            const token = await Authenticate.geraToken(user);
            return res.status(200).json({ user, token })
        }

        else {

            return res.status(400).json({ message: "user ou password invalid" })
        }

    }

};

