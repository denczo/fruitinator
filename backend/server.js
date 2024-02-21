const express = require("express")
const PORT = process.env.PORT || 9000
const app = express()
const cors = require('cors')

app.use(cors());
app.get('/', async function (req, res) {
  res.send("App is working!")
})

const productRouter = require("./routes/products.js")
app.use('/products', productRouter)

app.listen(PORT, () => {
  console.log(`The server is active on port ${PORT}`)
});