require("dotenv").config();
const express = require("express");
const cors = require("cors");

// init app
const app = express();
app.use(express.json());
app.use(cors());

// import product data from local json
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

// get a specific product by id
app.get("/api/products/:id", (req, res) => {
  const product = product_details.find((prod) => prod.id === req.params.id);

  if (!product)
    res.status(404).send({
      response: "Not Fount",
      message: "Product Not Found!",
      "api-routes": {
        "all-products": "/api/products",
        "single-product": "/api/product/:id",
      },
    });
  res.status(200).send(product);
});

app.post("/api/create-payment-intent", (req, res) => {
  const stripe = require("stripe")(`${process.env.VITE_APP_STRIPE_PUBLIC_KEY}`);

  exports.handler = async function (event, context) {
    if (event.body) {
      const { cart, shippingFee, totalAmount } = JSON.parse(event.body);

      const calculateOrderAmount = () => {
        return shippingFee + totalAmount;
      };

      try {
        const paymentIntent = await stripe.paymentIntens.creat({
          amount: calculateOrderAmount(),
          currency: "usd",
          description: "react e commerce payment testing",
          shipping: {
            name: "amitxparmar",
            address: {
              line1: "510 Townsend St",
              postal_code: "98140",
              city: "San Francisco",
              state: "CA",
              country: "US",
            },
          },
        });
        return {
          statusCode: 200,
          body: JSON.stringify({
            clientSecret: paymentIntent.client_secret,
          }),
        };
      } catch (err) {
        console.log(err);
        return {
          statusCode: 500,
          body: JSON.stringify({
            msg: err.message,
          }),
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(cart),
      };
    }
    return {
      statusCode: 200,
      body: "Create Payment Intent",
    };
  };
});

// ENV
const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`Running E-commerce API Server on ${port}..`)
);
