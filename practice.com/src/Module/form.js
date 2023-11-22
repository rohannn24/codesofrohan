const mongo = require('mongoose');

const formEntry = new mongo.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const AllForms = new mongo.model('AllForms', formEntry);

module.exports = AllForms;