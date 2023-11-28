const express = require("express");
const router = express.Router();

//Require Routes
const authRoutes = require("./auth");

router.use("/auth", authRoutes);

module.exports = router;
