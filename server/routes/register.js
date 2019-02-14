const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/', (req, res) => {
    console.log("REGISTER::", req.body);
    if (
        req.body.firstName !== null &&
        req.body.lastName !== null &&
        req.body.email !== null &&
        req.body.password !== null
        ) {
            const result = User.findOne({email: req.body.email},);

            if (result.email != null) {
                res.send('Email utilisé')
            } else {
            const user = new User();
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.password = req.body.password;
            user.created_at = Date();

            user.save( function (error, result){
                console.log(error);
                console.log(result)
                const response = {
                    "result": "OK",
                    "message": `Félicitation ${user.firstName} vous êtes inscrit`
                }
                res.send(response);
            })
        }
    }
});

module.exports = router;