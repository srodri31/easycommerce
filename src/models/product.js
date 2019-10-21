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

// const surface = new Product({
//     name: "Surface Pro",
//     stock: 1200,
//     value: 340000
// })

// surface.save()
//     .then((data) => console.log(data))
//     .catch(err => console.log(err.message))

module.exports = Product