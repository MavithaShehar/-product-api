const Product = require("../models/Products");

exports.addProduct = async (req, res) => {
    try {
        const { name, price, quantity} = req.body;
        console.log("req is : ",req.body)
        if (!name || !price || !quantity) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newProduct = new Product({ name, price, quantity});
        await newProduct.save();

        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
