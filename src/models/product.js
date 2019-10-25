const mongoose = require("../db/config")

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product