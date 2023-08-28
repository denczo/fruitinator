const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
  title: String,
  price: Number,
  info: String,
  img: {
    data: Buffer,
    contentType: String
  },
  nutrition:{
    type: Object,
    default: {}
  }
})

module.exports = mongoose.model('Product', productSchema)