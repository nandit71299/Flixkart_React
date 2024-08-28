import dotenv from "dotenv";
dotenv.config();

import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";

import instance from "./razorpayInstance.js";

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded(false));

app.post("/create-order", async (req, res) => {
  const amount = req.body.amount;
  const currency = "INR";
  try {
    const response = await instance.orders
      .create({
        amount: 1000,
        currency: currency,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });

    res.json({ data: response });
  } catch (error) {
    console.log(error);
  }
});

app.post("/order-confirmation", (req, res) => {
  // console.log(req.body);
  res.redirect(
    301,
    `${process.env.FRONTEND_URL}order-confirmation/${req.body.razorpay_payment_id}`
  );
});

app.post("/verify-payment", async (req, res) => {
  const paymentId = req.body.payment_id;
  // return console.log(paymentId);

  try {
    const paymentStatus = await instance.payments.fetch(paymentId);
    console.log(paymentStatus.captured);
    if (paymentStatus.captured) {
      return res.json({
        success: true,
      });
    } else {
      return res.json({
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on Port ", 3000);
});
