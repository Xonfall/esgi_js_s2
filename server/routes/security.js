const express = require('express');
const router = express.Router();
const User = require('../models/user');
const createToken = require('../libs/auth').createToken

router.post('/login_check', (req, res) => {
    User.findOne({email: req.body.email}).then(data => {
        if (req.body.email === data.email && req.body.password === data.password) {
            const token = createToken({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email
            });

            res.send({token});
        } else {
            res.status(400).send({
                error: 'Invalid email/password'
            });
        } 
    });
});

module.exports = router;