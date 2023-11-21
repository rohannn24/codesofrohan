const mongoose = require('mongoose');

const allReg = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cnfPassword: {
        type: String,
        requried: true
    }
});

const Registration = new mongoose.model('allReg', allReg);

module.exports = Registration;