const express = require("express");

const PORT = process.env.PORT || 9000;

const app = express();

const db = require('./db.js');
const productModel = require('./product.js')

const cors = require('cors');
const product = new productModel({
  title: "Avocado",
  price: 5,
  info: "Avocado is healthy",
  nutrition: [
    {
      quantity: 1,
      calories: 200,
      fat: 0.4,
      cholesterol: 0.2,
      natrium: 0.1,
      kalium: 0.25,
      carbohydratres: 0.1,
      protein: 0.33,
    }]
})

product.save()
.then((doc) => {
  console.log(doc);
})
.catch((err) => {
  console.error(err);
});

productModel.find({
  title: "Avocado"
}).then((doc) => {
  console.log(doc);
})
.catch((err) => {
  console.error(err);
});

// newProduct.save().then(() => {
//   console.log('Save User at MongoDB');
// })
//   .catch((error) => {
//     console.error(error);
//   });
app.use(cors());
app.get('/', async function (req, res) {
  res.send("App is working!")
})

app.get('/product', async function (req, res) {
  const data = await productModel.find({});
  if(!data) return
  res.send(data);    
})

app.listen(PORT, () => {
  console.log(`The server is active on port ${PORT}`);
});