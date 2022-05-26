import React from "react";
import "./PageDetailsOverviewItem.css";
import { convertBufferToImage } from "../../../utils/convertBufferToImage";

function PageDetailsTourGuides({ guide }) {
  const userImg = convertBufferToImage(
    guide.avatar.img.data,
    guide.avatar.contentType
  );
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
