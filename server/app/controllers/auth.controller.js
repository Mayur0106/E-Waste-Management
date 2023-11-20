const validator = require('../config/validator')
const db = require('../models');
const User = db.user;
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const validationRules = {
            fullName: 'required',
            userName: 'required',
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
                User.create({
                    fullName: req.body.fullName,
                    userName: req.body.userName,
                    email: req.body.email,
                    phone: req.body.phone,
                    address: req.body.address,
                    password: bcrypt.hashSync(req.body.password, 8),
                }).then((user) => {
                    res.status(200).send({
                        success: true,
                        message: "User is registered successfully !",
                        data: user
                    })
                }).catch((err) => {
                    res.status(400).send({ error: err });
                });
            }
        })

    } catch (error) {
        console.log("error in auth.controller.js :: signup() =>", error);
        res.status(500).send({ success: false, message: error.message || "something went wrong" });
    }
}

exports.signin = (req, res) => {
    try {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(async user => {
                if (!user) {
                    return res.status(404).send({ success: false, message: "user Not found." });
                }

                var passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    user.password
                );

                if (!passwordIsValid) {
                    return res.status(401).send({
                        success: false,
                        message: "Invalid Password!"
                    });
                }


                var token = jwt.sign({ id: user.id }, process.env.secret, {
                    expiresIn: 86400 // 24 hours
                });

                res.status(200).send({ success: true, message: "Login successfully.!", data: { token: token, user: user } })

            })
            .catch(err => {
                res.status(500).send({ success: false, message: err.message });
            });
    } catch (error) {
        console.log("error in auth.controller.js :: signin() =>", error);
        res.status(500).send({ success: false, message: error.message || "something went wrong" });
    }
}