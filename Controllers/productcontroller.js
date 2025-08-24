// 14 -------PRODUCT :----------------------------------
const product = require('../models/product');
const catchasync = require('../utils/catchasync');


exports.watch = catchasync(async (req, res) => {
    console.log("watch", req.body);
    const watchs = await product.create(req.body);
    if (watchs) {
        return res.send({
            message: 'Success',
            prod: watchs
        });
    }
});

//  Get To the Product ID :---
exports.prodfind = catchasync(async (req, res) => {
    console.log('product_id', req.params.product_id);
    let id = await product.find({ product_id: req.params.product_id });

    if (!id) {
        return (new console.error("Please provide valid product_id"));
    }
    res.status(201).json({
        status: "Success",
        message: "Get Data",
        Data: id
    });
});




