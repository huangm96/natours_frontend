import React, { useEffect, useContext } from "react";
import ToursContext from "./../../context/ToursContext";

import "./CardHeader.css";

function CardHeader({ tour }) {
  const { getImageCover } = useContext(ToursContext);
  useEffect(() => {
    getImageCover(tour.imageCover);
  }, []);

  return (
    <div className="card-header-container">
      <div className="card-picture">
        <div className="card-picture-overlay"></div>
        <img
          className="card-picture-img"
          src={tour.imageCoverPicture}
          alt={tour.name}
        />
      </div>
      <div className="card-tertirary">
        <span>{tour.name}</span>
      </div>
    </div>
  );
}

export default CardHeader;
