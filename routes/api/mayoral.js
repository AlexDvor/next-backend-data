const express = require("express");
const router = express.Router();

const { products: ctrl } = require("../../controllers/index");

router.get("/products", ctrl.getProducts);

module.exports = router;
