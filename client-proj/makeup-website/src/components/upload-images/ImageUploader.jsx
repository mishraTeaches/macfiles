// src/components/ImageUploader.js
import React, { useState } from "react";
import { uploadImage } from "./Upload-Image";

export const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleImageUpload = async (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      try {
        const data = await uploadImage(selectedFile);
        setMessage("Image uploaded successfully!");
        console.log("File uploaded:", data);
      } catch (error) {
        setMessage(`Upload failed: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {message && <p>{message}</p>}
    </div>
  );
};

export default ImageUploader;
