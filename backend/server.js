const express = require("express");
const data = require("./data.json");

const PORT = process.env.PORT || 9000;

const app = express();

const db = require('./db.js');
const productModel = require('./product.js')
productModel.deleteMany();

const cors = require('cors');

const initData = () => {
  console.log("Test")
  data.forEach(fruit => {
    const product = new productModel({
      fruit: fruit.Fruit,
      price: fruit.Price,
      info: fruit.Info,
      location: fruit.Location,
      image: fruit.Image,
      nutrition: fruit.Nutritions
    })

      product.save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

  })

  console.log("Finished")
}

// initData();


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