require("dotenv").config();
const stripe = require("stripe")(import.meta.VITE_APP_STRIPE_PUBLIC_KEY);

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
