const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
const cors = require('cors');
const morgan = require("morgan");

app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors())
app.use(bodyParser.json())

app.use(morgan('dev'))
app.set('view engine', 'ejs')


const dataUser = {
    username : "philodiva",
    fullname: "Philodiva Taufiq Khalish",
    password: 12345,
    address: "jakarta",
    state: "indonesia",
};


app.listen(port, () => {
    console.log("listening on port 5000")
});


//app.get("/", (req, res) => {
    //res.send("sending from port 5000")
//});

app.get('/', (req,res) => {
    res.render('index')
})

app.post('/user', (req, res) => {
    res.status(200).send({ message : 'success', data: req.body})
})

//app.get('/login', (req, res) => {
    //res.send(dataUser)
// })

app.get('/login', (req, res) =>{
    res.render('login')
})

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send({
        message: 'succesfull to logged in',
        dataUser: {
            username: req.body.username,
            password: req.body.password,
        }
    })
})