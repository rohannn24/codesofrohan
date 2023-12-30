const mongo = require('mongoose');
const chalk = require('chalk');

mongo.connect('mongodb://127.0.0.1:27017/ReactLogin').then(() => {
    console.log(chalk.green.inverse('Connected to database....'));
})