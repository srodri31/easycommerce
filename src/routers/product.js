const { Router } = require("express")
const productController = require("../controllers/product")

const router = Router()

router.get("/:id", productController.findById)
router.post("/", productController.create)

module.exports = router

