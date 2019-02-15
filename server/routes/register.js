const express = require('express');
const User = require('../models/user');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');

router.post('/', [
    check('firstName').isLength({min: 0, max: 120}),
    check('lastName').isLength({min: 0, max: 120}),
    check('email').isEmail(),
    check('password').not().isEmpty()
], (req, res) => {
    // Verify input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).send({
            "result": "NOK",
            "message": `Data not valid.`
        });
    }

    const {firstName, lastName, password} = req.body;
    const email = req.body.email.toLowerCase();

    // Check if user exist
    let countUser = User.countDocuments({email: email}).then(
        data => {
            if (data > 0) {
                return res.status(200).send({
                    "result": "NOK",
                    "message": "Email utilisé"
                });
            }

            // Create the user and send the response
            const user = new User({firstName, lastName, email, password, created_at: new Date()});
            user.save(function (error, result) {
                if (error) {
                    console.log("Error::", error)
                    return res.status(201).send({
                        "result": "NOK",
                        "message": "An error occured."
                    });
                }
                return res.status(201).send({
                    "result": "OK",
                    "message": `Félicitation ${user.firstName}! Vous êtes inscrit.`
                });
            });
        }
    ).catch(
        error => {
            return res.status(500).send({
                "result": "NOK",
                "message": "An error occured."
            });
        }
    );
});

module.exports = router;