const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]; // Extract token
   
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Verified User:", verified); // Log decoded token
        req.user = verified;
        next();
    } catch (err) {
        console.error("Token Verification Error:", err.message);
        res.status(400).json({ message: "Invalid Token" });
    }
};

module.exports = { verifyToken };
