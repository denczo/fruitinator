const express = require("express");
const mongoose = require("mongoose");

const server = '127.0.0.1:27017';
const database = "MyDB";
const app = express();

// app.get('/fruitinator/', function(req, res){
//   res.send("Hello from the root application URL");
// });

// app.get('/fruitinator/test/', function(req, res){
//   res.send("Hello from the 'test' URL");
// });
// // app.use("/", express.json());
// app.get('/',"Hello World"
// )
// app.listen(3000, () => {
//   console.log("The server is active on port 3000");
// });
// mongodb+srv://fruitlover:hU5ime8QmEQDGPcs@clusterfruitinator.othe67z.mongodb.net/
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(`mongodb+srv://fruitlover:hU5ime8QmEQDGPcs@clusterfruitinator.othe67z.mongodb.net/`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}

module.exports = new Database();



const {Schema, model} = mongoose;

const productSchema = new Schema ({
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

const Product = mongoose.model('Product', productSchema)
const newProduct = new Product({
    title: 'Avocado',
    price: 1.70
});

newProduct.save().then(() => {
    console.log('Save User at MongoDB');
  })
  .catch((error) => {
    console.error(error);
  });