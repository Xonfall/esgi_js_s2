const express = require('express');
const router = express.Router();
const User = require('../models/user');
const createToken = require('../libs/auth').createToken;
const {check, validationResult} = require('express-validator/check');

router.post('/login_check', [
    check('email').isEmail(),
    check('password').isLength({min: 0, max: 32})
], (req, res) => {
    // Verify input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            "result": "NOK",
            "message": `Data not valid.`
        });
    }

    const {email, password} = req.body;
    console.log("EMAIL::", email);
    console.log("PWD::", password);


    User.findOne({email: email}).then(data => {
        console.log("DATA EMAIL::", data.email);
        console.log("DATA EMAIL::", data.password);
        if (data !== undefined && email === data.email && password === data.password) {
            const token = createToken({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email
            });
            return res.send({token});
        }

        return res.status(400).send({
            error: 'Invalid email/password'
        });
    }).catch(
        error => {
            return res.status(500).send({
                "result": "NOK",
                "message": "An error occured."
            });
        }
    );
});

module.exports = router;