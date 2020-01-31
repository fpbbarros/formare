'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routerIndex = require('./app/routes/routerIndex');
const routerParticipant = require('./app/routes/routerParticipant');


const app = express()
    .use(express.json())
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use('/', routerIndex)
    .use('/participant', routerParticipant);


module.exports = app;
