import React, { useState, useEffect } from "react";
import { fetchImages } from "../fetch-images/Fetch-Images"; // Import the fetchImages function

export const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchImages();
      // const fetchedImages = [
      //   {
      //     src: "../images/image1.jpeg",
      //     name: "Image1",
      //   },
      //   {
      //     src: "../images/image2.jpeg",
      //     name: "Image2",
      //   },
      //   {
      //     src: "../images/image3.jpeg",
      //     name: "Image3",
      //   },
      //   {
      //     src: "../images/image4.jpeg",
      //     name: "Image4",
      //   },
      //   {
      //     src: "../images/image5.jpeg",
      //     name: "Image5",
      //   },
      //   {
      //     src: "../images/image6.jpeg",
      //     name: "Image6",
      //   },
      //   {
      //     src: "../images/image7.jpeg",
      //     name: "Image7",
      //   },
      //   {
      //     src: "../images/image8.jpeg",
      //     name: "Image8",
      //   },
      // ];
      setImages(fetchedImages);
    };
    loadImages();
  }, []);

  return (
    <div>
      {/* className="grid grid-cols-2 md:grid-cols-4 gap-4" */}
      <div className="grid">
        {images?.map((image) => (
          <>
            {image.name.startsWith(".emp") ? (
              ""
            ) : (
              <div>
                <img
                  key={image.id}
                  src={`https://khxdlwekmyzfdswpkhzp.supabase.co/storage/v1/object/public/images/${image.name}?t=2024-09-14T06%3A28%3A40.315Z`} // Use the public URL of the image
                  alt={image.name}
                  className="border-[7px] image"
                />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
