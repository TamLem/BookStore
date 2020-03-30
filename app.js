const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')

const app = express(); 

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', 'views')

const cartRouter = require('./routes/cart.js')
const adminRouter = require('./routes/admin.js')
const shopRouter = require('./routes/store.js')


app.use('/admin', adminRouter)
app.use('/cart', cartRouter)
app.use('/', shopRouter)


app.use(express.static(path.join(__dirname, '/views') ))
app.use(express.static(path.join(__dirname, '/public')))



app.listen(3000, console.log("Server started at 3000"))
