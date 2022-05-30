import React from "react";
import "./PageDetailsOverviewItem.css";
import { displayUserAvatar } from "../../userAvatar/userAvatar";

function PageDetailsTourGuides({ guide }) {
  const guideRole = guide.role.replace("-", " ");
  return (
    <div className="page-details-overview-item">
      {displayUserAvatar(guide)}
      <p className="overview-item-heading">{guideRole}</p>
      <p className="overview-item-value">{guide.name}</p>
    </div>
  );
}

export default PageDetailsTourGuides;
