const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const products = require("./products.json");
const product_details = require("./product.json");

// READ Request Handlers
app.get("/", (req, res) => {
    res.status(200).send({
        response: "OK",
        message: "Amit's E-Commerce Products API",
        "api-routes": {
            "all-products": "/api/products",
            "single-product": "/api/product/:id",
        },
    });
});


// GET all products at once
app.get("/api/products", (req, res) => {
    res.status(200).send(products);
});




const port = process.env.PORT || 8000;
app.listen(port, () =>
    console.log(`Running E-commerce API Server on ${port}..`)
)