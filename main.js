const express = require('express');
const app = express();
const authroute = require('./Routes/auth');
// User-Route
const userroute = require('./Routes/user');  
// Product-Route
const productroute = require('./Routes/product')


app.use(express.json()) 


app.use('/auth', authroute)     
app.use('/school', userroute) 
app.use('/product',productroute)




module.exports = app;
 