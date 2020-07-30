const express = require("express");
const router = express.Router();
const typesRouter = require("./type");

router.use("/monster", typesRouter);

module.exports = router;
