import React from "react";
import "./CardDetails.css";
import CardData from "./CardData";
import { getDate } from "./../../utils/getDate";
import {
  BsFillGeoAltFill,
  BsPerson,
  BsFlag,
  BsCalendarEvent,
} from "react-icons/bs";
function CardDetails({ tour }) {
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
          data={getDate(tour.startDates[0], "mm/yyyy")}
          Icon={BsCalendarEvent}
        />
        <CardData data={`${tour.locations.length} stops`} Icon={BsFlag} />
        <CardData data={`${tour.maxGroupSize} people`} Icon={BsPerson} />
      </div>
    </div>
  );
}

export default CardDetails;
