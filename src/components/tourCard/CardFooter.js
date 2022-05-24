import React from "react";
import { Link } from "react-router-dom";

import "./CardFooter.css";
function CardFooter({ tour }) {
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
      <Link to={`/tours/${tour.id}`} className="btn card-footer-button">
        DETAILS
      </Link>
    </div>
  );
}

export default CardFooter;
