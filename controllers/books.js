const fs = require('fs')
const Book = require('../models/books')


exports.addBook = (req, res, next) => {
    const newBook = new Book(req.body);
    newBook.save();
    res.render('index', {booksData: Book.getAllBooks()})
}

exports.getAddBook = (req, res, next) => {
    let booksData = Book.getAllBooks();
    res.render('admin/admin', {booksData: booksData})
}

exports.getBooks = (req, res, next) => {
    let booksData = Book.getAllBooks();
    console.log(booksData)
    res.render('index', {booksData: booksData})
}

  



