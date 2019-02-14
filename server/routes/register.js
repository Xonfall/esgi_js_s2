const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/', (req, res) => {
    if (
        req.body.firstName !== null &&
        req.body.lastName !== null &&
        req.body.email !== null &&
        req.body.password !== null
    ) {
        const result = User.findOne({email: req.body.email});
        if (result.email != null) {
            res.send('Email utilisé')
        } else {
            const {firstName, lastName, email, password} = req.body;
            const user = new User({firstName, lastName, email, password, created_at: Date()});
            user.save(function (error, result) {
                console.log("Register:Error::", error);
                console.log("Register:Result::", result);
                const response = {
                    "result": "OK",
                    "message": `Félicitation ${user.firstName} vous êtes inscrit`
                };
                res.send(response);
            });
        }
    }
});

module.exports = router;