import asyncHandler from "express-async-handler";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// @desc    Upload image to Cloudinary
// @route   POST /api/upload
export const uploadImage = asyncHandler(async (req, res) => {
  const file = req.files.image;
  cloudinary.v2.uploader.upload(file.tempFilePath, (error, result) => {
    if (error) {
      res.status(500);
      throw new Error("Cloudinary upload failed");
    }
    res.status(200).json({ url: result.secure_url });
  });
});
