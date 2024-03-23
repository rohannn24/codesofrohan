import express from 'express';
const app = express();
import env from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './Routes/userRoutes.js';
import todosRouter from './Routes/todosRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

let corsAllow = {
    origin: "http://localhost:3000",
    methods: "PUT, GET, POST, PATCH, DELETE, HEAD",
    credentials: true
}
app.use(cors(corsAllow));
env.config();

const dbConnection = () => {
    mongoose.connect('mongodb://localhost:27017/todoapp')
    .then(() => {
        console.log('Database is connected...');
    }).catch((err) => {
        console.log(err);
    })
}


app.use(cookieParser());
app.use(express.json());
app.use('/', userRouter);
app.use('/', todosRouter);

const PORT = process.env.PORT || 8800
app.listen(PORT, () => { 
    dbConnection();
    console.log(`server is live on ${PORT}`);
}) 