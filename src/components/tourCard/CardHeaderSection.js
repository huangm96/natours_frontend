import React, { useEffect, useContext } from "react";
import ToursContext from "../../context/ToursContext";

import "./CardHeaderSection.css";

function CardHeaderSection({ tour }) {
  const { getImageCover } = useContext(ToursContext);
  useEffect(() => {
    getImageCover(tour.imageCover);
  }, []);

  return (
    <div className="cardHeaderSection">
      <div className="card-picture">
        <div className="card-picture-overlay"></div>
        <img
          className="card-picture-img"
          src={tour.imageCover}
          alt={tour.name}
        />
      </div>
      <div className="card-tertirary">
        <span>{tour.name}</span>
      </div>
    </div>
  );
}

export default CardHeaderSection;
