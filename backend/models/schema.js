const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
  sportdes: {
    type: String,
    //required: true,
  },
  time_stamp: {
    type: Number,
    //required: true,
  },
})
module.exports = mongoose.model('Sport',projectSchema)



