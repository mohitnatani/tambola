const _ = require('lodash');
const ticket = require('./ticket-generator');
const express = require('express');
const cookieParser = require('cookie-parser');
const {loginPost} = require('./controllers/loginController');
const {initDB} = require('./dbConfig');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded());

initDB();
//console.log();
app.post('/login', loginPost);

app.get('/create-ticket/:noOfTickets', (req, res)=>{
    const {noOfTickets} = req.params;
    let temp = ticket.generateTambola(parseInt(noOfTickets));
    console.log(temp);
    res.send(temp);
});
app.get('/ticket/:ticketId', (req, res)=>{

})

app.listen(8000, ()=>{
    console.log('Server started successfully');
});