const userroute = require('express').Router();
const std = require('../Controllers/usercontroller');


userroute.post('/student/', std.authorize);
userroute.delete('/student/:id',std.deleteone);
userroute.get('/student/:id',std.getone);
// Name to Get data
// userroute.get('/student/:name',std.getone);

userroute.get('/serarch/:key', std.getall);
userroute.patch('/:id',std.editdata);




module.exports = userroute;