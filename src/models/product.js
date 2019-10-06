const mongoose = require("../db/config")

const ProductSchema = mongoose.Schema({
    name: String,
    stock: Number
})

const Product = mongoose.model("Product", ProductSchema)

// const surface = new Product({
//     name: "Surface Pro",
//     stock: 1200
// })

// surface.save()
//     .then((data) => console.log(data))
//     .catch(err => console.log(err.message))

module.exports = Product