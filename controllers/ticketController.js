const TambolaModel = require('../models/tambolaModel');
const ticket = require('../ticket-generator');

const generateTicket = async (req, res)=>{
    const {noOfTickets} = req.params;
    let temp = ticket.generateTambola(parseInt(noOfTickets));
    console.log(temp);
    let obj = {ticket:temp};
    try {
        //insert a document
        const resultTambola = await TambolaModel.create(obj)
        console.log(resultTambola)
        res.status(201).send({ status: 'success', ticket: resultTambola });
      } catch (err) {
        console.log(err)
        //log in a file for debug err
        res.status(500).send({ status: 'error', msg: err.errors })
      }
    //res.send(temp);
}

const getTicketByID = async (req, res)=>{
    const { ticketId } = req.params

    try {
        const ticket = await TambolaModel.findById(ticketId)
        if (!ticket) {
            res.status(404).send({ status: 'error', msg: 'Ticket not found' })
        } else {
            res.send({ status: 'success', tambola: ticket })
        }
    } catch (err) {
        console.log("Error fetching ticket from DB")
        res.status(500).send({ status: 'error', msg: 'Error fetching ticket' })
  }
}

module.exports = {
    generateTicket,
    getTicketByID
}