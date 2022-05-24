import React from "react";
import "./TourCard.css";
import CardHeader from "./CardHeader";
import CardDetails from "./CardDetails";
import CardFooter from "./CardFooter";

function TourCard({ tour }) {
  return (
    <div className="tourCard-container">
      <CardHeader tour={tour} />
      <CardDetails tour={tour} />
      <CardFooter tour={tour} />
    </div>
  );
}

export default TourCard;
