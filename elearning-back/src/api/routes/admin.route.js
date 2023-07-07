const { Router } = require("express");
const { adminPage } = require("../controllers/admin.controller");
const router = Router();

router.get("/admin", adminPage);

module.exports = router;