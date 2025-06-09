const express = require("express");
const { addProduct, getAllProducts, updateProduct, deleteProduct, getProductById} = require("../controllers/productController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add",verifyToken,addProduct); 
router.get("/",verifyToken,getAllProducts); 
router.put("/:id",verifyToken,updateProduct);
router.delete("/:id",verifyToken,deleteProduct);
router.get("/:id",verifyToken,getProductById);

module.exports = router;