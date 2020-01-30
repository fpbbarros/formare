'use strict'

const express = require('express');
const router = express.Router();


router.get('/');
router.get('/app', (req, res) => {
    res.status(200).json({
        title: '',
        version: '0.0.1'
    })
});


module.exports = router;
