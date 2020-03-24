const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const booksData = [];

router.post("/savebook", (req, res, next) => {

    let existingData = readFile('books.txt', 'utf8');

    if (existingData != null) existingData.forEach(element => { 
        booksData.push(element);
    });
        
    booksData.push(req.body);
    console.log(booksData);
    storeData(booksData, "books.txt"); 
    res.redirect("/admin.html");
});

const storeData = (data, path) => {
  try {
     fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

const readFile = (path, encoding) => {
  try {
    const data = fs.readFileSync(path, encoding)
        return (data != undefined) ? JSON.parse(data) : null;
  
  } catch (err) {
    throw err;
  }
};

module.exports = router;
