const mongoose = require("../db/config")
const Product = require("./product")

const OrderSchema = mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                reuired: true,
                ref: "Product"
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    totalValue: {
        type: Number
    },
    buyer: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    },
    status: {
        type: String,
        default: "Pending Payment"
    }
}, {
    timestamps: true
})

OrderSchema.pre("save", async function(next) {
    try {
        const order = this
        let totalValue = 0

        for(let i = 0; i < order.products.length; i++) {
            let productDB = await Product.findById(order.products[i].product)
            totalValue += productDB.value * order.products[i].quantity
        }

        order.totalValue = totalValue
        next()
    } catch(e) {
        console.log(e.message)
    }
})

const Order = mongoose.model("Order", OrderSchema)

// const orderEx = new Order({
//     products: [
//         {
//             product: mongoose.Types.ObjectId("5dad1a76f609e04254900633"),
//             quantity: 3
//         },
//         {
//             product: mongoose.Types.ObjectId("5dad1a8bc48c7115f44018b2"),
//             quantity: 2
//         }
//     ],
//     buyer: {
//         name: "Santiago Rodriguez",
//         email: "santi011c@outlook.com",
//         address: "Cr49A #92-52"
//     }
// })

// orderEx.save()
//     .then((data) => console.log(data))
//     .catch(err => console.log(err.message))

module.exports = Order