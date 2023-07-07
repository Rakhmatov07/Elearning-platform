const { Router } = require("express");
const router = Router();
const { homePage } = require("../controllers/home.controller");

router.get('/', homePage);

module.exports = router;
