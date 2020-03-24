const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();


const readFile = (path, encoding) => {
    try {
        const data = fs.readFileSync(path, encoding);
        let reply;
        (data != undefined) ? reply=JSON.parse(data) : reply=null;
        return reply;

    } catch (err) {
      return null;
    }
  };
  

const booksData = readFile('books.txt', 'utf8')
console.log(booksData)

router.get('/', (req, res, next) => {
    res.render('index', {booksData: booksData})
});

module.exports = router;