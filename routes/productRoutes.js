const express = require("express");
const { addProduct,getAllProducts,updateProduct,deleteProduct} = require("../controllers/productController");

const router = express.Router();

router.post("/add",addProduct); 
router.get("/",getAllProducts); 
router.put("/:id",updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;