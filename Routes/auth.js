
const route = require('express').Router();
const authcontroller = require('../Controllers/authcontroller');
 


route.post('/signup',authcontroller.register)
 

module.exports=route;