import React from "react";
import { useLocation } from "react-router-dom";

import PageHeader from "./pageHeader/PageHeader";
import PageDetails from "./pageDetail/PageDetails";
function TourPage() {
  const location = useLocation();

  return (
    <div className="tour-page-container">
      <PageHeader tour={location.state.tour} />
      <PageDetails tour={location.state.tour} />
    </div>
  );
}

export default TourPage;
