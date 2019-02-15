const express = require('express');
const router = express.Router();
const Subscription = require('../models/subscription');
const User = require('../models/user');

/**
 * Show the subscriptions
 */
router.get('/', (req, res) => {
    const email = req.user.payload.email;

    User.findOne({email: email}).then(
        data => {
            const userId = data._id;
            Subscription.find({user: {_id: userId}}).then(data => {
                return res.send({result: data});
            }).catch(
                error => {
                    return res.status(500).send({
                        "result": "NOK",
                        "message": "An error occured."
                    });
                }
            );
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

/**
 * Post a subscription
 */
router.post('/new', (req, res) => {
    const email = req.user.payload.email;

    User.findOne({email: email}).then(
        data => {
            const userId = data._id;

            const title = '1 Mois';
            const description = 'Abonnement 1 Mois';
            const type = '1_MONTH';
            const price = 29.99;

            const subscription = new Subscription({
                title: title,
                description: description,
                type: type,
                img: null,
                price: price,
                user: {_id: userId},
                created_at: new Date(),
                updated_at: new Date()
            });
            subscription.save(function (error, result) {
                if (error) {
                    console.log("Error::", error);
                    return res.status(201).send({
                        "result": "NOK",
                        "message": "An error occured."
                    });
                }
                return res.status(201).send({
                    "result": "OK",
                    "message": `Vous avez souscrit à l'abonnement 1 mois.`
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