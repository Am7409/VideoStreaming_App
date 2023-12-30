import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfull
    // console.log("file is uploaded on cloudinary ", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

const deleteFromCloudinary = async (avatarUrl) => {
  try {
    // publicId is typically the identifier of the resource on Cloudinary
    // It might be the filename or a unique identifier you assigned when uploading
    // Destroy the image in Cloudinary
    const response = await cloudinary.uploader.destroy(avatarUrl);
    if (response.result == "ok") {
      console.log("Image deleted from Cloudinary");
    } else {
      console.error("Error deleting image from Cloudinary");
    }
  } catch (error) {
    console.error("Error deleting image from Cloudinary:", error.message);
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
