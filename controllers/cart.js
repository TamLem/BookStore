const cartModel = require('../models/cart')

const cart = [];

exports.addProduct = (req, res, next) => {
    let productId = req.params.productId;  
    
    cartModel.save(productId);
    res.redirect(req.path)
}

exports.getCart = (req, res, next ) => {
    let cart = cartModel.getCart();
    
    let totalPrice=0;
    cart.forEach((elem) => {
        totalPrice += Number(elem.price);
    })

    console.log(totalPrice)
    res.render('cart', {cart:cart, totalPrice:totalPrice})
}