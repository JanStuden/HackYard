const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Garden = new Schema({
  plantArray: {
      type: Array
    }
}, {
  collection: 'gardens'
})

module.exports = mongoose.model('Garden', Garden)
