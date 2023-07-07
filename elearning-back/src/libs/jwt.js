const Jwt = require("jsonwebtoken");
const { jwtsecretkey } = require("../../config/index");

const sign = (payload) => Jwt.sign(payload, jwtsecretkey);
const verify = (payload) => Jwt.verify(payload, jwtsecretkey);

module.exports = {
    sign,
    verify
}