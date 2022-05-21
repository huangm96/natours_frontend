import React from "react";
import "./TourCard.css";
import CardHeaderSection from "./CardHeaderSection";
import CardDetails from "./CardDetails";
function TourCard({ tour }) {
  return (
    <div className="tourCard-container">
      <CardHeaderSection tour={tour} />
      <CardDetails tour={tour} />
    </div>
  );
}

export default TourCard;
