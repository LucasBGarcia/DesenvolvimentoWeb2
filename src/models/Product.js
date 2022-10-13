const { model, Schema } = require('mongoose')

const newProductSchema = new Schema({
    id: {
        type: Number,
        AutoIncrement: true,
    },
    productName: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
    },
})

module.exports = model('product', newProductSchema)