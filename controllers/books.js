const Product = require('../models/books')


exports.addBook = (req, res, next) => {
    const editBook = req.body;
    console.log(editBook)
    if(req.query.edit) {
        Product.findByPk(editBook.id) 
        .then( 
            product => {    
                            product.title = editBook.title;
                            product.author = editBook.author;
                            product.description = editBook.caption;
                            product.price = +editBook.price;
                            product.img = editBook.img; 
                            return product.save(); 
                        })
        .then( () => res.redirect('/admin/add-product/0'))
        .catch(err => console.log(err))

    }
    else {
        const newBook = req.body;
        const product = Product.create({title: newBook.title, author:newBook.author, description:newBook.caption, price:newBook.price, img: newBook.img })
        .then( () => {return Product.findAll()})
        .then(products => res.render('admin/admin', {booksData: products, edit:false}))
        .catch (err => console.log(err))
    }
}

exports.delBook = (req, res, next) => {
    let id = req.params.productId;
    Product.findByPk(id)
    .then(
        product => {return product.destroy();}
    ).then ( () =>
        {return Product.findAll()}
    ).then( updateBooks =>
        { return res.render('admin/admin', {booksData: updateBooks, edit:false});}
    ).catch (
         err => console.log(err)
         )

    
   
}

exports.getAddBook = (req, res, next) => {
    let editMode = req.query.edit;
    let editBookId = req.params.productId
    
    if (editMode) {
        let editBook;
        Product.findByPk(editBookId) 
        .then( 
            product => { editBook = product})
        .then(
            Product.findAll()
            .then( products => {
                    res.render('admin/admin', {booksData: products, product: editBook, edit:true} ) 
                    }
                ))
        .catch ( err => console.log(err) )
    }
    else {
        Product.findAll().then(
            products =>  res.render('admin/admin', {booksData: products, edit:false})
        ).catch(err => console.log(err))
    }
    
    
}

exports.getBooks = (req, res, next) => {

    Product.findAll().then( products => 
        res.render('index', {booksData: products})
    ).catch(err => console.log(err))

}

exports.getProduct = (req, res, next) => {
    let id = req.params.productId;
    Product.findByPk(id)
    .then( product =>
        res.render('details', {bookData:product} )
    )
}





