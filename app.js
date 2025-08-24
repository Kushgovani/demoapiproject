
const mongoose =require('mongoose');
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})    
const app = require('./main');




mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
}).then(()=>{
    console.log('DB connection Done');
}).catch(() =>{
    console.log('Error');
})
 


var port = process.env.PORT || 8000; 
app.listen(port, function () {
    console.log(`Server Start ${port}`);
});

