const express = require("express");
const path = require("path");
const fs = require("fs");
const booksController = require('../controllers/books.js')

const router = express.Router();


router.post("/savebook", booksController.addBook);

router.use('/add-product/:productId', booksController.getAddBook )

router.use('/delete/:productId', booksController.delBook)

module.exports = router;
