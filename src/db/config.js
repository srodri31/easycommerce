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


module.exports = mongoose