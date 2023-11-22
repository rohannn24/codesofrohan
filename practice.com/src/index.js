const express = require('express');
const app = express();
const chalk = require('chalk');
const path = require('path');
const PORT = 3000;
const hbs = require('hbs');
const staticPath = path.join(__dirname, '../static');
const viewsPath = path.join(__dirname, '../templetes/views');
const partialsPath = path.join(__dirname, '../templetes/partials');
require('./Database/conn.js');
const Reg = require('./Module/schema.js');
const Form = require('./Module/form.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


app.get('/', (req, res) => {
    res.render("index");
});
app.get('/login', (req, res) => {
    res.render("login");
});

app.post('/login', async (req, res) => {
    try {
        const userid = req.body.username;
        const password = req.body.password;
        const data = await Reg.findOne({userid:userid});
        console.log(data);
        if(data.password === password){
            res.status(201).render("index",{
                userName: data.fname
            });
        } else{
            res.status(201).render("login", {
                pState: "Invalid Cridentials..."
            });
        }
    } catch (error) {
        res.status(201).render("login", {
            pState: "Invalid Cridentials..."
        });
        console.log(error);
    }
});

app.get('/signup', (req, res) => {
    res.render("signup");
});

app.get('/contactus', (req, res) => {
    res.render("contactus");
});

app.post('/contactus', async (req, res) => {
    try {
        const newForm = Form({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        });
        const formResult = await newForm.save();
        res.status(201).render("contactus", {
            thankyou: "Thanks for submiting your query we will get back to you soon..."
        });
    } catch (error) {
        console.log(error);
    }
});
app.post('/signup', async (req, res) => {
    try {
        const userid = req.body.username;
        const data = await Reg.findOne({userid:userid});
        const password = req.body.password;
        const cnfPassword = req.body.cnfPassword;
        if(data !== null) {
            res.status(201).render("signup", {
                uState: "UserId Already exist..."
            })
        }
        else if(password === cnfPassword) {
            const newEntry = new Reg({
                fname: req.body.fname,
                email: req.body.email,
                userid: req.body.username,
                password: req.body.password,
                cnfPassword: req.body.cnfPassword
            });
            const result = await newEntry.save();
            res.status(201).render("login");
        } else{
            res.render("signup", {
                pState: "Password Miss-matched."
            })
        }
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, '127.0.0.1', (err) => {
    console.log(chalk.green.inverse('Connected...'));
})