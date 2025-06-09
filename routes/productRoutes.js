const express = require("express");
const { addProduct, getAllProducts, updateProduct, deleteProduct, getProductById} = require("../controllers/productController");

const router = express.Router();

router.post("/add",addProduct); 
router.get("/",getAllProducts); 
router.put("/:id",updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getProductById);

module.exports = router;