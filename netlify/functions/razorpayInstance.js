import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();

const instance = new Razorpay({
  key_id: process.env.RZP_ID,
  key_secret: process.env.RZP_SECRET,
});

export default instance;
