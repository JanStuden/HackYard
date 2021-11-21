const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PlantRecord = new Schema({
    id: {
      type: Number
    },
    name: {
      type: String
    },
    genus: {
        type: String
    },
    light_condition: {
        type: String
    },
    water_needed: {
      type: Number
    },
     harvest: {
          type: String
     },
     trimming: {
          type: String
     }
}, {
  collection: 'plantRecords'
})

module.exports = mongoose.model('PlantRecord', PlantRecord)
