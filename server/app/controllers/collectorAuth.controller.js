const validator = require('../config/validator');
const db = require('../models');
const Collector = db.collector;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const validationRules = {
            centerName: 'required',
            contactPerson: 'required',
            // operatingHours: 'required',
            timeFrom: 'required',
            timeTo: 'required',
            latitude: 'required',
            longitude: 'required',
            acceptedItems: 'required',
            serviceOffered: 'required',
            email: 'required|email',
            phone: 'required',
            state: 'required',
            district: 'required',
            subDistrict: 'required',
            city: 'required',
            password: 'required|min:6',
        };

        await validator(req.body, validationRules, {}, (error, status) => {
            if (!status) {
                return res.status(412)
                    .send({
                        success: false,
                        message: 'Validation failed',
                        data: error
                    });
            }
            // else {
            Collector.create({
                images: req.file.path,
                centerName: req.body.centerName,
                contactPerson: req.body.contactPerson,
                // operatingHours: req.body.operatingHours,
                timeFrom: req.body.timeFrom,
                timeTo: req.body.timeTo,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                acceptedItems: req.body.acceptedItems,
                serviceOffered: req.body.serviceOffered,
                email: req.body.email,
                phone: req.body.phone,
                state: req.body.state,
                district: req.body.district,
                subDistrict: req.body.subDistrict,
                city: req.body.city,
                password: bcrypt.hashSync(req.body.password, 8),
            }).then((collector) => {
                if (!collector) res.status(404).send({ success: false, message: "Collector Not found. signup failed!" });
                res.status(200).send({
                    success: true,
                    message: "Collector is registered successfully !",
                    data: collector
                })
            }).catch((err) => {
                res.status(400).send({ error: err });
            });

            // }
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
                return res.status(404).send({ success: false, message: "Collector Not found. signin failed!" });
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

exports.findCollector = async (req, res) => {
    try {
        const whereClause = {};

        for (const key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                const element = req.body[key];
                if (element) {
                    whereClause[key] = element;
                }
            }
        }

        const collectors = await Collector.findAll({ where: whereClause });

        if (!collectors.length) {
            return res.status(404).json({
                success: false,
                message: "Collector not found."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Collectors found successfully!",
            data: collectors
        });
    } catch (error) {
        console.log("error in collectorAuth.controller.js :: findCollector() =>", error);
        res.status(500).send({ success: false, message: error.message || "something went wrong" });
    }
}