const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
  name: String,
  size: String,
  price: Number
});

module.exports = mongoose.model('Coffee', coffeeSchema);