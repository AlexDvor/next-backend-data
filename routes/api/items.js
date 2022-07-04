const express = require("express");
const router = express.Router();

const { items: ctrl } = require("../../controllers/index");

router.get("/items", ctrl.getItems);

module.exports = router;
