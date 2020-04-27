const sequelize = require('../util/database')
const Sequelize = require('sequelize')

const CartItems = sequelize.define('cartItems', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    qty: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
})

module.exports = CartItems;


