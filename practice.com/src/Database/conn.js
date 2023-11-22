const mongoose = require('mongoose');
const chalk = require('chalk');
mongoose.connect("mongodb://127.0.0.1:27017/PicBazaarData").then(
    console.log(chalk.yellow.inverse('Database is now connected...'))
).catch((err) => {
    console.log(err);
})