const productroute =require('express').Router();
const prod= require('../Controllers/productcontroller')



productroute.post('/watch/',prod.watch)
productroute.get('/serarch/:product_id', prod.prodfind)

 
module.exports=productroute;  