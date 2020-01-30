'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routerIndex = require('./app/routes/routerIndex');
const routerUser = require('./app/routes/routerUsers');
const routerMessage = require('./app/routes/routerMessage');
const routerSession = require('./app/routes/routerSession');

const app = express()
    .use(express.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(cors())
    .use('/', routerIndex)
    .use('/users', routerUser)
    .use('/messages', routerMessage)
    .use('/sessions', routerSession);

module.exports = app;
