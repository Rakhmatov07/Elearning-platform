const config = require("../../config/index");

const run = (app) => {
    app.listen(config.port, () => {
        console.log(config.port);
    })
};

module.exports = run;

