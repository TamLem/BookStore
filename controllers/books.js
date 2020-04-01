const fs = require('fs')
const Book = require('../models/books')

const booksData = Book.getAllBooks();

exports.addBook = (req, res, next) => {
    if(req.query.edit) {
        const newBook = new Book(req.body);
        let id = newBook.id;
        newBook.update(id);
        console.log('edit mode on')
        res.render('admin/admin', {booksData: booksData, edit:false})
    }
    else {
        const newBook = new Book(req.body);
        newBook.save();
        res.render('admin/admin', {booksData: booksData, edit:false})
    }
}

exports.delBook = (req, res, next) => {
    let id = req.params.productId;
    Book.delBook(id, (updateBooks)=>{
        res.render('admin/admin', {booksData: updateBooks, edit:false});
    });
}

exports.getAddBook = (req, res, next) => {
    let editMode = req.query.edit;
    let editBook = findById(req.params.productId)
    
    if (editMode) {
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



function findById (id) {
    let product = booksData.find((elem)=>elem.id==id);
    return product;
}


