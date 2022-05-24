import React from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "./PageHeader";
function TourPage() {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="tourPage-container">
      <PageHeader imageCover={location.state.imageCoverPicture} />
    </div>
  );
}

export default TourPage;
