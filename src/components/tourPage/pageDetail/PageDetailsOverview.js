import React from "react";
import "./PageDetailsOverview.css";
import { BsPerson, BsCalendarEvent, BsStar } from "react-icons/bs";
import { FaMountain } from "react-icons/fa";
import PageDetailsOverviewItem from "./PageDetailsOverviewItem";
import PageDetailsTourGuides from "./PageDetailsTourGuides";
function PageDetailsOverview({ tour }) {
  return (
    <div className="page-details-overview">
      <div className="page-details-data-box">
        <p className="green-heading">QUICK FACTS</p>
        <PageDetailsOverviewItem
          Icon={BsCalendarEvent}
          heading="next date"
          value={tour.nextStartDay}
        />
        <PageDetailsOverviewItem
          Icon={FaMountain}
          heading="difficulty"
          value={tour.difficulty}
        />
        <PageDetailsOverviewItem
          Icon={BsPerson}
          heading="participants"
          value={`${tour.maxGroupSize} people`}
        />
        <PageDetailsOverviewItem
          Icon={BsStar}
          heading="rating"
          value={`${tour.ratingsAverage}/5`}
        />
      </div>
      <div className="page-details-data-box">
        <p className="green-heading">Your tour guides</p>
        {tour.guides.map((guide) => {
          return <PageDetailsTourGuides key={guide.id} guide={guide} />;
        })}
      </div>
    </div>
  );
}

export default PageDetailsOverview;
