const express = require("express");
const router = express.Router();

const { cv: ctrl } = require("../../controllers/index");

router.get("/fronted/es", ctrl.getCv);

module.exports = router;
