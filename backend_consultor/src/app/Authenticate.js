const jsonWebToken = require('jsonwebtoken');
const authConfig = require('./config/Auth.json');

class Authenticate {

  constructor() {

  }

  authenticate(user) {

    const token = jsonWebToken.sign({ id: user._id }, authConfig.secret, {
      expiresIn: 86400
    })

    return token

  }

}

module.exports = Authenticate;