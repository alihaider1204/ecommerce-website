import asyncHandler from "express-async-handler";
import User from "../models/User.js";

// @desc    Get user profile
// @route   GET /api/users/profile
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      phone: user.phone,
      primaryAddress: user.primaryAddress,
      shippingAddress: user.shippingAddress,
      billingAddress: user.billingAddress,
      preferences: user.preferences
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.primaryAddress = req.body.primaryAddress || user.primaryAddress;
    user.shippingAddress = req.body.shippingAddress || user.shippingAddress;
    user.billingAddress = req.body.billingAddress || user.billingAddress;
    user.preferences = req.body.preferences || user.preferences;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      phone: updatedUser.phone,
      primaryAddress: updatedUser.primaryAddress,
      shippingAddress: updatedUser.shippingAddress,
      billingAddress: updatedUser.billingAddress,
      preferences: updatedUser.preferences
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
