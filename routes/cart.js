const express = require("express");
const path = require("path");
const fs = require("fs");
const cartController = require('../controllers/cart')

const router = express.Router();

router.use('/:productId', cartController.addProduct)

//cartController.addProduct

router.get('/', cartController.getCart)

module.exports = router;
