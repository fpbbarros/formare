'use strict'

const express = require('express');
const participantController = require('../controllers/ParticipantController');

const router = express.Router();

router.get('/', participantController.index);
router.get('/:id', participantController.show);
router.post('/', participantController.store);

module.exports = router;