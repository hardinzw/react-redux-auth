const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  name: {
    type: String,
  },
  issue: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
    default: new Date()
  },
});

module.exports = Ticket = mongoose.model("tickets", TicketSchema);