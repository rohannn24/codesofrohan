const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const hbs = require('hbs');
const chalk = require('chalk');
require('./Database/connect');
const Register = require('./Models/registration');


const staticPath = path.join(__dirname, "../public");
const hbsView = path.join(__dirname, "../templetes/views");
const partialPath = path.join(__dirname, "../templetes/partials");
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(staticPath)); 
app.set("view engine", "hbs");
app.set("views", hbsView);
hbs.registerPartials(partialPath);

//navigation code
app.get('/', (req, res) => {
    res.render("index");
});
app.get('/login', (req, res) => {
    res.render("login");
});
app.post('/login', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        
        const data = await Register.findOne({username: username});

        if(data.password === password){
            res.status(201).render("index", {
                userName: data.fname
            })
        }else{
            res.send('Invalid Details...');
        }
    } catch (error) {
        res.status(400).send('Invalid Email...');
        console.log(error);
    }
});
app.get('/register', (req, res) => {
    res.render("signup");
});
app.post('/register', async (req, res) => {
    try {
        const cnfp = req.body.cnfPassword;
        const p = req.body.password;
        if(cnfp === p){
            const newReg = await Register({
                fname: req.body.fname,
                email: req.body.email,
                number: req.body.number,
                username: req.body.username,
                password: p,
                cnfPassword: cnfp
            });
            const result = await newReg.save();
            res.status(201).render("login", {
                stateCode: 'Registered Successfully..'
            });
            console.log(result);
        }else{
            res.send('Invalid Credential...')
        }
        } catch (error) {
            console.log(error);
        }
});

app.listen(PORT, '127.0.0.1', (err) => {
    if(err){
        console.log('Error Occured...');
    } else{
        console.log(chalk.green.inverse(`${PORT} is now Connected...`));
    }
})



