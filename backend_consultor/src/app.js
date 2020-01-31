'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routerIndex = require('./app/routes/routerIndex');
const routerParticipant = require('./app/routes/routerParticipant');
const routerSession = require('./app/routes/routerSession');
const routerMessage = require('./app/routes/routerMessage');
const routeProject = require('./app/routes/routerProject');


const app = express()
    .use(express.json())
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use('/', routerIndex)
    .use('/participants', routerParticipant)
    .use('/messages', routerMessage)
    .use('/projects', routeProject)
    .use('/Sessions', routerSession);


module.exports = app;
