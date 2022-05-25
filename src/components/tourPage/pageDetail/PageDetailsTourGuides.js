import React from "react";
import { Buffer } from "buffer";
import "./PageDetailsOverview.css";

function PageDetailsTourGuides({ guide }) {
  const imgBuffer = new Buffer.from(guide.avatar.img.data).toString("base64");
  const userImg = `data:${guide.avatar.contentType};base64, ${imgBuffer}`;
  const guideRole = guide.role.replace("-", " ");
  return (
    <div className="page-details-overview-item">
      <img src={userImg} alt={guide.name} className="user-avatar" />
      <p className="overview-item-heading">{guideRole}</p>
      <p className="overview-item-value">{guide.name}</p>
    </div>
  );
}

export default PageDetailsTourGuides;
