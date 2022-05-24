import React from "react";
import "./CardDetails.css";
import CardData from "./CardData";
import {
  BsFillGeoAltFill,
  BsPerson,
  BsFlag,
  BsCalendarEvent,
} from "react-icons/bs";
function CardDetails({ tour }) {
  const tourStartDate = new Date(tour.startDates[0]);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="card-details-container">
      <p className="card-details-subheading">{`${tour.difficulty} ${tour.duration}-day tour`}</p>
      <div className="card-details-summary">{tour.summary}</div>
      <div className="card-details-data">
        <CardData
          data={tour.startLocation.description}
          Icon={BsFillGeoAltFill}
        />
        <CardData
          data={`${month[tourStartDate.getMonth()]} ${
            tourStartDate.getYear() + 1900
          }`}
          Icon={BsCalendarEvent}
        />
        <CardData data={`${tour.locations.length} stops`} Icon={BsFlag} />
        <CardData data={`${tour.maxGroupSize} people`} Icon={BsPerson} />
      </div>
    </div>
  );
}

export default CardDetails;
