const express = require("express");
const path = require("path");
const fs = require("fs");
const booksController = require('../controllers/books.js')

const router = express.Router();


router.post("/savebook", booksController.addBook);

router.get('/add-product', booksController.getAddBook )


module.exports = router;
