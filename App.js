const express = require("express");
const cors = require("cors");
const connectDB = require("./config/DB");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes")
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use('/api/products',productRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
