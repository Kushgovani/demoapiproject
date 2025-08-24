// -------CRUD Strat :----------------------------------
 
const student = require('../models/user');
const catchasync = require('../utils/catchasync');


//  Insert DATA :------
exports.authorize = catchasync(async (req, res) => {
    console.log('student', req.body);
    const std = await student.create(req.body);
    if (std) {
        return res.send({
            message: 'success',
            student: std
        });
    }
});

//   Delet DATA :-----
exports.deleteone = catchasync(async (req, res) => {
    console.log('student', req.params.id);
    let doc = await student.findByIdAndDelete(req.params.id);
    if (!doc) {
        return (new console.error("Please provide valid id"));
    }
    res.status(201).json({
        status: "Success",
        message: "Decord Delete One Done",
    });
});

//  Get DATA :-----
exports.getone = catchasync(async (req, res) => {
    // FIND Name & Any :----------
    // let get = await student.find({name: req.params.name })
    let get = await student.findById(req.params.id);
    if (!get) {
        return (new console.error("Please provide valid name"));
    }
    res.status(201).json({
        status: "Success",
        message: "Get Data",
        Data: get
    });
});

//12 Get All DATA :-----
exports.getall = catchasync(async (req, res) => {
    let data = await student.find({});
    res.status(201).json({
        status: "Success",
        message: "Get Data",
        studentall: data
    });
});

// 13 Edit DATA :---------
// PATCH DATA :--------
exports.editdata = catchasync(async (req, res) => {   
        const user = await student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(201).json({
            status: "Success",
            message: "Get Data",
            Data: user
        });
    });
   
    