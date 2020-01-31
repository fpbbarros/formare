'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routerIndex = require('./app/routes/routerIndex');
const routerParticipant = require('./app/routes/routerParticipant');
const routerAuth = require('./app/routes/routerAuth');


const app = express()
    .use(express.json())
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use('/', routerIndex)
    .use('/participants', routerParticipant)
    .use('/authenticate', routerAuth);


module.exports = app;
