const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/', (req, res) => {
    User.find().then(data => res.send(data));
});

router.get('/:firstname', (req, res) => {
    console.log(req.params);

    User.findOne({firstName: req.params.firstName}).then(data => res.send(data));
});

module.exports = router;
