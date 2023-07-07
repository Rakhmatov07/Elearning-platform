require('dotenv/config');
const { env } = process;

const config = {
    port: +env.PORT,
    jwtsecretkey: env.Jwt_Secret_Key,
};

module.exports = config;