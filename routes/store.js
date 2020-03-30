const express = require("express");
const path = require("path");
const fs = require("fs");
const booksController = require('../controllers/books.js')


const router = express.Router();

router.use('/products/:productId', booksController.getProduct);

router.get('/', booksController.getBooks );

module.exports = router;
