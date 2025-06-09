const express = require("express");
const cors = require("cors");
const connectDB = require("./config/DB");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/products', require('./routes/productRoutes'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
