const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    startDate: Date,
    endDate: Date,   
});

const userSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    place: String,
    status: String,
    start: { type: Date, default: Date.now },
    off: { type: Number, default: 0 },
    count: { type: Number, default: 30 }, 

    leaveRecords: [leaveSchema]
});

const OrderModel = mongoose.model('Order', userSchema); 

module.exports = OrderModel;
