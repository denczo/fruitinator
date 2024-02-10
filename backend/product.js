const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
  fruit: String,
  price: String,
  info: String,
  location: String,
  countryCode: String,
  image: String,
  nutrition:{
    type: Object,
    default: {}
  }
})

module.exports = mongoose.model('Product', productSchema)