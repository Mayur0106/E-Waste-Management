const validator = require('../config/validator');
const db = require('../models');
const Collector = db.collector;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const validationRules = {
            centerName: 'required',
            email: 'required|email',
            phone: 'required|numeric',
            address: 'required',
            password: 'required|min:6',
        };

        await validator(req.body, validationRules, {}, (error, status) => {
            if (!status) {
                res.status(412)
                    .send({
                        success: false,
                        message: 'Validation failed',
                        data: error
                    });
            } else {
                Collector.create({
                    centerName: req.body.centerName,
                    email: req.body.email,
                    phone: req.body.phone,
                    address: req.body.address,
                    password: bcrypt.hashSync(req.body.password, 8),
                }).then((collector) => {
                    res.status(200).send({
                        success: true,
                        message: "Collector is registered successfully !",
                        data: collector
                    })
                }).catch((err) => {
                    res.status(400).send({ error: err });
                });

            }
        })

    } catch (error) {
        console.log("error in collectorAuth.controller.js :: signup() =>", error);
        res.status(500).send({ success: false, message: error.message || "something went wrong" });
    }
}

exports.signin = (req, res) => {
    try {
        Collector.findOne({

            where: {
                email: req.body.email
            }
        }).then(async collector => {
            if (!collector) {
                return res.status(404).send({ success: false, message: "Collector Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                collector.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    success: false,
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var token = jwt.sign({ id: collector.id }, process.env.JWT_SECRET, {
                expiresIn: 86400 // 24 hours
            });

            res.status(200).send({
                success: true,
                message: "Collector is logged in successfully !",
                data: collector,
                accessToken: token
            });
        }).catch(err => {
            res.status(500).send({ success: false, message: err.message });
        });
    } catch (error) {
        console.log("error in collectorAuth.controller.js :: signin() =>", error);
        res.status(500).send({ success: false, message: error.message || "something went wrong" });
    }
}