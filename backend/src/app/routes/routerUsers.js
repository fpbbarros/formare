'use strict'

const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();

router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/', userController.store);
router.put('/:id', userController.put);
router.delete('/:id', userController.del);


module.exports = router;