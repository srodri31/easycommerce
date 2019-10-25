const Product = require("../models/product")

const findById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(product) {
            res.status(200).send(product)
        } else {
            res.status(404).send({
                message: `Product with id ${req.params.id} not found.`
            })
        }
    } catch(e) {
        res.status(400).send({
            message: e.message
        });
    }
}

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
    findById,
    create
}