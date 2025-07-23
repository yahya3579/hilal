// utils/cloudinaryUpload.js
import axios from 'axios';

const CLOUD_NAME = 'doeykzpxv'; // 🔁 Replace with your Cloudinary cloud name
const UPLOAD_PRESET = 'hilal_upload_preset'; // 🔁 Replace with your preset

export const uploadToCloudinary = async (file) => {
    if (!file) return null;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            formData
        );

        return response.data.secure_url; // This is the Cloudinary image URL
    } catch (err) {
        console.error("Cloudinary upload error:", err);
        return null;
    }
};
