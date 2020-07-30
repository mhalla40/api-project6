const express = require("express");
const monsterController = require("../controllers/Types");
const router = express.Router();

router.get("/", monsterController.index);
router.get("/name/:name", monsterController.getName);
router.post("/", monsterController.create);
router.put("/name/:name", monsterController.edit);
router.delete("/name/:name", monsterController.delete);

module.exports = router;
