import React from "react";
import "./PageDetails.css";

import PageDetailsOverview from "./PageDetailsOverview";
import PageDetailsDescription from "./PageDetailsDescription";
function PageDetails({ tour }) {
  return (
    <div className="page-details-container">
      <PageDetailsOverview tour={tour} />
      <PageDetailsDescription tour={tour} />
    </div>
  );
}

export default PageDetails;
