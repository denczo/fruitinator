import mongoose from 'mongoose';

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

export default productSchema