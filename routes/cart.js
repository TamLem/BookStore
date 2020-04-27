const express = require("express");
const path = require("path");
const fs = require("fs");
const cartController = require('../controllers/cart')

const router = express.Router();

router.get('/delete/:productId', cartController.deleteCartItem)
router.use('/:productId', cartController.addProduct)


//cartController.addProduct

router.get('/', cartController.getCart)

module.exports = router;
