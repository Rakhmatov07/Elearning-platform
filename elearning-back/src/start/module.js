const express = require("express");
const cors = require("cors");
const route = require("../api/routes");
const fileUpload = require("express-fileupload");

const modules = (app) => {
    app.use(cors({origin: "*"}));
    app.use(express.json());
    app.use(route);
    app.use(express.urlencoded({extended: true}));
    app.use(fileUpload('/uploads'));
};

module.exports = modules;
