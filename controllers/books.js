const fs = require('fs')
const Book = require('../models/books')

const booksData = Book.getAllBooks();

exports.addBook = (req, res, next) => {
    const newBook = new Book(req.body);
    newBook.save();
    res.render('index', {booksData: Book.getAllBooks()})
}

exports.getAddBook = (req, res, next) => {
    let editMode = req.query.edit;
    let editBook = findById(req.params.productId)
    
    if (editMode) {
        console.log('edit mode on')
        res.render('admin/admin', {booksData: booksData, edit:true, editBook:editBook}  )
    } else {
        res.render('admin/admin', {booksData: booksData, edit:false})
    }
}

exports.getBooks = (req, res, next) => {
    let booksData = Book.getAllBooks();
    res.render('index', {booksData: booksData})
}

exports.getProduct = (req, res, next) => {
    let product = findById(req.params.productId);
    res.render('details', {bookData:product} )
}


exports.delBook = (req, res, next) => {
    
}

function findById (id) {
    let product = booksData.find((elem)=>elem.id==id);
    return product;
}


