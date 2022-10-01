require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "https://gilded-cendol-93ca80.netlify.app/",
  })
);

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.post("/create-checkout-session", async (req, res) => {
  const items = req.body.storeItems;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.cartItems.map((item) => {
        itemData = items.filter((i) => i.id === item.id);
        console.log(itemData[0].imgUrl);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: itemData[0].name,
            },
            unit_amount: itemData[0].price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/store`,
      cancel_url: `${process.env.CLIENT_URL}/home`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000);
