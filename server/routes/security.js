const express = require('express');
const router = express.Router();
const createToken = require('../libs/auth').createToken

router.post('/login_check', (req, res) => {
    console.log(req.body.username, req.body.password);
    if (req.body.username === 'user' && req.body.password === 'password') {
        const token = createToken({
            username: 'user'
        });

        res.send({
            token
        });
    } else {
        res.status(400).send({
            error: 'Invalid username/password'
        });
    }
});

module.exports = router;