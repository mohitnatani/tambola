const _ = require('lodash');
const express = require('express');
const cookieParser = require('cookie-parser');
const {loginPost} = require('./controllers/loginController');
const {generateTicket,getTicketByID} = require('./controllers/ticketController');
const {initDB} = require('./dbConfig');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded());

initDB();

app.post('/login', loginPost);

app.get('/create-ticket/:noOfTickets', generateTicket);
app.get('/ticket/:ticketId', getTicketByID);

app.listen(8000, ()=>{
    console.log('Server started successfully');
});