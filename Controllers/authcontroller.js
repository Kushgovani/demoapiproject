//register
const User = require('../models/auth');
const catchasync = require('../utils/catchasync')
 
 

exports.register = catchasync(async (req, res, next) => {
    console.log('data',req.body);
    const user = await User.create(req.body)
    if (user) {
        return res.send({
            message: 'success',
            user: user
        })
    }
});


 