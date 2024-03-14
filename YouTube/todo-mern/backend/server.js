import express from 'express';
import mongoose from 'mongoose';
const app = express();
import userRouter from './Routes/user.routes.js';


const dbConnection = () => {
    mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log('Database is connected....');
    }).catch((err) => {
        console.log(err);
    });
}


app.use('/api/user', userRouter);



app.listen(8800, (err) =>{
    err?console.log(err):console.log("Server is live...");
    dbConnection();
})