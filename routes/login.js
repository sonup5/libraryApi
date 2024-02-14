const express = require("express");
const router = express.Router();
const handleLogin = require("../controller/handleLogin");

router.post("/login", handleLogin);

module.exports = router;
