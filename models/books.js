const fs = require('fs')

const booksData = [];
initalize(booksData);

function initalize (booksData) {
    let existingData = readFile('books.txt', 'utf8');
    if (existingData != null) existingData.forEach(element => { 
        booksData.push(element);
    });
    return booksData;
}

module.exports = class Book {
    constructor(bookData) {
        this.title = bookData.BookTitle;
        this.author = bookData.Author;
        this.year = bookData.Year;
        this.caption = bookData.Caption;
        this.img = bookData.Cover;
        this.price = bookData.Price;
    }

    saveBook () {
        
    }
}