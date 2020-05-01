const cartModel = require('../models/cart')
const CartItem = require('../models/cart-items')
const Cart= require('../models/cart')
const Product = require('../models/books')

const cart = [];

exports.addProduct = (req, res, next) => {
    let book;
    let productId = req.params.productId;  
    Product.findByPk(productId)
    .then( 
         product => book=product
    )
    .then( () => {
        return Cart.findByPk(1)
        }
    )
    .then ( cart => {
        return cart.addProduct( book, 
                    { through: {
                        qty: 1
                    }})}
    )                    
    .then( () => {return Product.findAll()} )
    .then(products => res.render('index', {booksData: products})
    ).catch( err => console.log(err))
    
}

exports.getCart = (req, res, next ) => {
    Cart.findByPk(1)
    .then( cart => 
        {return cart.getProducts()}
    )
    .then( cartItems => 
         { 
            let totalPrice = 0;
            cartItems.forEach((elem) => {
                totalPrice += Number(elem.price);
            })
            res.render('cart', {cart:cartItems, totalPrice:totalPrice})  //Todo- also provide qty from the cartitems table
         }
    )
}

exports.deleteCartItem = (req, res, next) =>  {
    const id = req.params.productId;
    CartItem.destroy({
        where: {
            productId: id
        }
    }).then( () => {
        console.log('Done');
        res.redirect('/cart')
    })
}

  

