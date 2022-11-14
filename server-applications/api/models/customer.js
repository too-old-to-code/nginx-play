const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Customer = new Schema({
  name: String,
  email: String,
  DOB: Date
});


module.exports = mongoose.model('Customer', Customer)