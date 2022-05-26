import React from "react";
import { useNavigate } from "react-router-dom";

import "./CardFooter.css";
function CardFooter({ tour }) {
  const navigate = useNavigate();
  const toTourPage = () => {
    navigate(`/tours/${tour.id}`, {
      state: { id: tour.id, tour },
    });
  };
  return (
    <div className="card-footer-container">
      <div>
        <p className="card-footer-value">
          <span className="value">{`$${tour.price}`}</span> per person
        </p>
        <p className="card-footer-value">
          <span className="value">{tour.ratingsAverage}</span> rating (
          {tour.ratingsQuantity})
        </p>
      </div>
      {tour.imageCoverPicture ? (
        <div
          onClick={() => {
            toTourPage();
          }}
          className="btn green-btn card-footer-button"
        >
          <p className="green-btn-text ">DETAILS</p>
        </div>
      ) : (
        <div className="btn card-footer-button">
          <p className="green-btn-text ">Loading</p>
        </div>
      )}
    </div>
  );
}

export default CardFooter;
