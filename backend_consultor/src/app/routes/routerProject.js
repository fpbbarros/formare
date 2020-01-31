'use strict'

const express = require('express');
const router = express.Router();
const projectController = require('../controllers/ProjectController');
const authMiddleware = require('../middleware/auth');



router.use(authMiddleware);
router.get('/', projectController.index);

module.exports = router;
