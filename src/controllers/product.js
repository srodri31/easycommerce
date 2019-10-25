const Product = require("../models/product")

const create = async (req, res) => {
    const product = new Product({
        ...req.body
    })

    try {
        await product.save();
        res.status(201).send(product);
    } catch(e) {
        res.status(400).send({
            message: e.message
        });
    }
}

module.exports = {
    create
}