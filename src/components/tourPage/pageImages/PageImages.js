import React, { useContext, useEffect } from "react";
import TourImagesContext from "./../../../context/TourImagesContext";
import { convertBufferToImage } from "./../../../utils/convertBufferToImage";
import "./PageImages.css";
function PageImages({ tour }) {
  const { getTourImages, imagesList } = useContext(TourImagesContext);
  useEffect(() => {
    getTourImages(tour.images);
  }, []);
  if (imagesList) {
    return (
      <div className="page-images-container">
        {imagesList.map((image) => {
          const picString = convertBufferToImage(
            image.img.data,
            image.contentType
          );
          return (
            <div className="page-tour-images" key={image.id}>
              <img src={picString} alt={image.filename} />
            </div>
          );
        })}
      </div>
    );
  }
  return null;
}
export default PageImages;
