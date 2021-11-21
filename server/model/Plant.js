const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Plant = new Schema({
  name: {
    type: String
  },
  age: {
    type: String
  },
  amount: {
    type: Number
  },
  position: {
    type: String
  },
  light: {
    type: String
  }
}, {
  collection: 'plants'
})

module.exports = mongoose.model('Plant', Plant)
