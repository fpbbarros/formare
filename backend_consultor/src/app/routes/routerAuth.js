'use strict'

const express = require('express');
const authController = require('../controllers/AuthController')
const router = express.Router();


router.post('/', authController.auth);

module.exports = router;