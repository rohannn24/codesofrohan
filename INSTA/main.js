import express from 'express';
import bcrypt from 'bcryptjs';
import userModel from './db/conn.js';
const app = express();




app.post('/register', async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = userModel({...req.body, password: hash});
    await newUser.save();
})
app.post('/login', async (req, res) => { 
    
})

app.listen(3000, (err) => {
    if(!err) {
        console.log('server is live on 3000');
    } else{
        console.log("error");
    }
});   