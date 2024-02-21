const express = require("express")
const db = require("../db.js")
const router = express.Router()
const productModel = require('../product.js')
const data = require("../data.json");

// productModel.deleteMany();

const initData = () => {
    data.forEach(fruit => {
        const product = new productModel({
            fruit: fruit.Fruit,
            price: fruit.Price,
            info: fruit.Info,
            location: fruit.Location,
            countryCode: fruit.CountryCode,
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

router.get("/", async (req, res) => {
    const data = await productModel.find({});
    if(!data) return
    res.send(data);   
})

module.exports = router