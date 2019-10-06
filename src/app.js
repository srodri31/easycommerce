const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.status(200).send({
        message: "I'm Alive!!!"
    })
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})