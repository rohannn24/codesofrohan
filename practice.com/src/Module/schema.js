const mongo = require('mongoose');
const bcrypt = require('bcryptjs');

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

newReg.pre("save", async function(next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
        console.log(this.password);
        this.cnfPassword = undefined;
    }
    next();
})


const Registration = new mongo.model('allReg', newReg);

module.exports = Registration;