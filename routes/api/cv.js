const express = require("express");
const router = express.Router();

const { cv: ctrl } = require("../../controllers/index");

router.post("/frontend/es", ctrl.getCv);
router.get("/watched", ctrl.addWatchResult);
router.get("/code", ctrl.addCodeResult);
router.get("/static", ctrl.addStatistics);

module.exports = router;
