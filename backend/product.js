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
  nutrition: [
    {
      quantity: Number,
      calories: Number,
      fat: Number,
      cholesterol: Number,
      natrium: Number,
      kalium: Number,
      carbohydratres: Number,
      protein: Number,
    }
  ]
})

module.exports = mongoose.model('Product', productSchema)