'use strict'


module.exports = {


    async index(req, res) {
        return res.status(200).json({ message: true, user: req.userId });
    }

}
