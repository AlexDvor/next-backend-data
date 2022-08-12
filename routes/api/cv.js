const express = require("express");
const router = express.Router();

const { cv: ctrl } = require("../../controllers/index");

router.get("/fr", ctrl.getCv);

module.exports = router;
