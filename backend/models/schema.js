const mongoose = require('mongoose');
const SportData = new mongoose.Schema({
  sportName: {
    type: String,
    //required: true,
  },
  Headline: {
    type: String,
    //required: true,
  },
  Content: {
    type: String,
    //required: true,
  },
  
},{timestamps: true}
)
module.exports = mongoose.model('SportData',SportData)

