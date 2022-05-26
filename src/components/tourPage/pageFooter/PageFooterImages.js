import React, { useContext } from "react";
import TourImagesContext from "../../../context/TourImagesContext";
import { convertBufferToImage } from "../../../utils/convertBufferToImage";

import "./PageFooter.css";

function PageFooterImages() {
  const { imagesList } = useContext(TourImagesContext);

  return (
    <div className="page-footer-images-box">
      <img
        src="/img/logo-green-round.png"
        className="page-footer-image logo-image"
        alt="logo"
        style={{ zIndex: 10 }}
      />
      {imagesList
        ? imagesList.map((image, i) => {
            const picString = convertBufferToImage(
              image.img.data,
              image.contentType
            );
            return (
              <img
                src={picString}
                alt={image.filename}
                className="page-footer-image tour-image"
                style={{ zIndex: 5 - i }}
                key={image.filename}
              />
            );
          })
        : null}
    </div>
  );
}

export default PageFooterImages;
