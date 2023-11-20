const API_CONTEXT = process.env.API_CONTEXT || '/api';
const controller = require("../controllers/collectorAuth.controller");
const { verifyCollectorSignUp, authJWT } = require("../middleware");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        API_CONTEXT + "/collectorAuth/signup",
        [
            verifyCollectorSignUp.checkDuplicateCenterName,
            verifyCollectorSignUp.checkDuplicateEmail,
            verifyCollectorSignUp.checkDuplicatePhone
        ],
        controller.signup
    );

    app.post(
        API_CONTEXT + "/collectorAuth/signin",
        controller.signin
    );
}