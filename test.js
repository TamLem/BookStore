const express = require('express')
const db = require('./util/database')

db.execute('INSERT INTO products (title, price, description, imgUrl) VALUES ("The Book", "9.99", "Excellent book", "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRchzrNPIyGLNvbRNX4l-67GtckOw_6tJK-soAcqxbzdVfbTAK4") ').then(()=>console.log('done')).catch(err => console.log(err));

let books;

/* db.execute('SELECT * FROM products').then((products) => {
     books = products[0]
     console.log(books)
}) */