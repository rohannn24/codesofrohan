const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.connect('mongodb://127.0.0.1:27017/allReg').then(() => {
    console.log(chalk.yellow.inverse('Database is now Connceted...'));
}).catch((err) => {
    console.log('Error occured will connecting to database...');
})