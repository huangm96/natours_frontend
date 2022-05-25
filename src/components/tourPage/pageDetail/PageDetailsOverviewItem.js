import React from "react";
import "./PageDetailsOverviewItem.css";
function PageDetailsOverviewItem({ Icon, heading, value }) {
  return (
    <div className="page-details-overview-item">
      <Icon className="overview-item-icon" />
      <p className="overview-item-heading">{heading}</p>
      <p className="overview-item-value">{value}</p>
    </div>
  );
}

export default PageDetailsOverviewItem;
