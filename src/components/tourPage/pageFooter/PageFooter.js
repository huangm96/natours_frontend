import React from "react";
import { Link } from "react-router-dom";
import "./PageFooter.css";
import PageFooterImages from "./PageFooterImages";
import PageFooterContent from "./PageFooterContent";
function PageFooter({ tour }) {
  return (
    <div className="page-footer-container">
      <div className="page-footer-box">
        <div className="page-footer-content-box">
          <PageFooterImages />
          <PageFooterContent tourDuration={tour.duration} />
        </div>
        <Link
          to={`/tours/${tour.id}/tourBooking`}
          className="btn green-btn page-footer-btn"
        >
          <p className="green-btn-text">Book tour now</p>
        </Link>
      </div>
    </div>
  );
}

export default PageFooter;
