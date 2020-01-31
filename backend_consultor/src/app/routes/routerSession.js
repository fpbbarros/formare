'use strict';

const express = require('express');
const router = express.Router();
const SessionController = require('../controllers/SessionController');

router.post('/', SessionController.store);


module.exports = router;