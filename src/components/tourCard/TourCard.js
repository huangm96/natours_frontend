import React from "react";
import "./TourCard.css";
import CardHeaderSection from "./CardHeaderSection";

function TourCard({ tour }) {
  return (
    <div className="tourCard-container">
      <CardHeaderSection tour={tour} />
    </div>
  );
}

export default TourCard;
