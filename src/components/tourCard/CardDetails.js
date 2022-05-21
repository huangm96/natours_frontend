import React from "react";
import "./CardDetails.css";
import CardData from "./CardData";
import { GrLocation } from "react-icons/gr";

function CardDetails({ tour }) {
  const tourStartDate = new Date(tour.startDates[0]);
  console.log(tourStartDate);
  return (
    <div className="card-details-container">
      <p className="card-subheading">{`${tour.difficulty} ${tour.duration}-day tour`}</p>
      <div>{tour.summary}</div>
      <div>
        <CardData icon={GrLocation} data={tour.startLocation.description} />
        <CardData
          data={`${tourStartDate.getMonth() + 1} ${
            tourStartDate.getYear() + 1900
          }`}
        />
        <CardData data={`${tour.locations.length} stops`} />
        <CardData data={`${tour.maxGroupSize} people`} />
      </div>
    </div>
  );
}

export default CardDetails;
