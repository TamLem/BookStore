const Book = require('./books')

const booksData = Book.getAllBooks();

const cart = [];

exports.save = (id) => {
    cart.push(findById(id));
    console.log(cart);
}

exports.getCart = () => {
    return cart;
}

function findById (id) {
    let product = booksData.find((elem)=>elem.id==id);
    return product;
}


