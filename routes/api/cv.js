const express = require("express");
const router = express.Router();

const { cv: ctrl } = require("../../controllers/index");

router.post("/frontend/es", ctrl.getCv);
router.get("/static", ctrl.updateStats);
router.get("/static/total", ctrl.updateTotal);

module.exports = router;
