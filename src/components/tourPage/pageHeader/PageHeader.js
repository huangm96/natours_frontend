import React from "react";
import { convertBufferToImage } from "./../../../utils/convertBufferToImage";
import "./PageHeader.css";
import { BsClock, BsFillGeoAltFill } from "react-icons/bs";
function PageHeader({ tour }) {
  return (
    <div className="page-header-container">
      <div className="page-coverImage-overlay"></div>
      <img
        className="page-coverImage-picture"
        src={convertBufferToImage(
          tour.imageCover.img.data,
          tour.imageCover.contentType
        )}
        alt="Tour ImageCover"
      />

      <div className="page-coverImage-tertirary">
        <span className="page-coverImage-tertirary-title">
          {`${tour.name} Tour`}
        </span>
        <div className="page-coverImage-tertirary-info">
          <div>
            <BsClock className="page-coverImage-icon" />
            <span> {`${tour.duration} days`}</span>
          </div>
          <div>
            <BsFillGeoAltFill className="page-coverImage-icon" />
            <p>{tour.startLocation.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
