'use strict'

const express = require('express');
const postController = require('../controllers/MessageController');
const router = express.Router();

router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/:id', postController.store);
router.delete('/:id', postController.del);

module.exports = router;