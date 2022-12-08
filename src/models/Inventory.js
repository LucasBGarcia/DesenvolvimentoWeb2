const { model, Schema, default: mongoose } = require('mongoose')

const newProductSchema = new Schema({
    id: {
        type: Number,
        AutoIncrement: true,
    },
    amount: {
        type: String,
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true,
    },

})

module.exports = model('inventory', newProductSchema)