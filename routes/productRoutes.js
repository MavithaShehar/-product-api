const express = require("express");
const { addProduct,getAllProducts,updateProduct} = require("../controllers/productController");

const router = express.Router();

router.post("/add",addProduct); 
router.get("/",getAllProducts); 
router.put("/:id",updateProduct);

module.exports = router;