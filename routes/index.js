const express = require("express");
const router = express.Router();
const monsterRouter = require("./monster");

router.use("/monster", monsterRouter);

module.exports = router;
