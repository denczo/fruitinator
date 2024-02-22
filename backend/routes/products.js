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

// initData();

router.get("/", async (req, res) => {
    const data = await productModel.find({});
    if(!data) return
    res.send(data);   
})


router.get("/:page", async (req, res) => {
    try {
        const page = parseInt(req.params.page);
        const perPage = 6;
        const skip = (page - 1) * perPage;
    
        const totalCount = await productModel.countDocuments();

        // Calculate the total number of pages
        const totalPages = Math.ceil(totalCount / perPage);

        const items = await productModel.find().skip(skip).limit(perPage);
    
        res.json({ items, totalPages });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
})

module.exports = router