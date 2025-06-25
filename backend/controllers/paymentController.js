import asyncHandler from "express-async-handler";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// @desc    Create Stripe payment intent
// @route   POST /api/payment/create-payment-intent
export const createPaymentIntent = asyncHandler(async (req, res) => {
  const { amount, currency = "usd" } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects amount in cents
      currency,
      payment_method_types: ["card"],
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Stripe payment intent creation failed");
  }
});
