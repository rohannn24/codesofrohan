import express from 'express';
const app = express();

app.use(express.json());

app.post('/getdata', (req, res) => {
    res.json([
        {
          "name": "John Doe",
          "dob": "1990-05-15"
        },
        {
          "name": "Jane Smith",
          "dob": "1985-10-20"
        },
        {
          "name": "Michael Johnson",
          "dob": "1978-03-08"
        },
        {
          "name": "Emily Brown",
          "dob": "1995-12-30"
        },
        {
          "name": "David Williams",
          "dob": "1982-07-25"
        },
        {
          "name": "Sarah Taylor",
          "dob": "1992-09-18"
        },
        {
          "name": "Christopher Lee",
          "dob": "1989-01-05"
        },
        {
          "name": "Amanda Martinez",
          "dob": "1987-06-12"
        },
        {
          "name": "Matthew Garcia",
          "dob": "1998-04-02"
        },
        {
          "name": "Laura Hernandez",
          "dob": "1984-11-09"
        }
      ]
      );
})


app.listen(8800, (err) => {
    err?console.log(err):console.log('Server is live on 8800 PORT');
})