const mongo = require('mongoose');

const newReg = new mongo.Schema({
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userid: {
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
        required: true
    }
});

const Registration = new mongo.model('allReg', newReg);

module.exports = Registration;