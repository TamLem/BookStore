const express = require("express");
const path = require("path");
const fs = require("fs");
const booksController = require('../controllers/books.js')


const router = express.Router();


router.get('/', booksController.getBooks );

module.exports = router;
