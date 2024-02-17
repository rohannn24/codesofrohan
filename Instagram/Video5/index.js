const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello From Home');
});
app.get('/profile', (req,res) => {
    res.send('hello from profile');
});

app.listen(3000);