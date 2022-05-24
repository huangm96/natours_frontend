import React from "react";
import "./PageHeader.css";
import { BsClock, BsFillGeoAltFill } from "react-icons/bs";
function PageHeader({ imageCover }) {
  return (
    <div className="page-header-container">
      <div className="page-coverImage">
        <div className="page-coverImage-overlay"></div>
        <img
          className="page-coverImage-picture"
          src={imageCover}
          alt="Tour ImageCover"
        />
      </div>{" "}
      <div className="page-coverImage-tertirary">
        <span className="page-coverImage-tertirary-title">
          THE SNOW ADVENTURER Tour
        </span>
        <div className="page-coverImage-tertirary-info">
          <div>
            <BsClock className="page-coverImage-icon" />
            <span>4 days</span>
          </div>
          <div>
            <BsFillGeoAltFill className="page-coverImage-icon" />
            <p>ASPEN, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
