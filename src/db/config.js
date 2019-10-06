const mongoose = require("mongoose")

const dbName = "easycommerce"

mongoose.connect(`mongodb+srv://admin:120297as@clustertest-6bxmv.azure.mongodb.net/${dbName}?retryWrites=true&w=majority`, 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
)
    .then(() => console.log("Connected to db"))
    .catch((err) => console.log(err.message));


module.exports = {
    momgoose
}

// const Cat = mongoose.model('Cat', { name: String });


// const kitty = new Cat({ name: 'Lulita' });
// kitty.save().then(() => console.log('meow'))
//     .catch((err) => console.log(err.message));