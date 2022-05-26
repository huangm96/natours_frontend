import React from "react";
import { useLocation } from "react-router-dom";

import PageHeader from "./pageHeader/PageHeader";
import PageDetails from "./pageDetail/PageDetails";
import PageImages from "./pageImages/PageImages";
import PageMap from "./pageMap/PageMap";
import PageReviews from "./pageReviews/PageReviews";
function TourPage() {
  const location = useLocation();

  return (
    <div className="tour-page-container">
      <PageHeader tour={location.state.tour} />
      <PageDetails tour={location.state.tour} />
      <PageImages tour={location.state.tour} />
      <PageMap tour={location.state.tour} />
      <PageReviews tour={location.state.tour} />
    </div>
  );
}

export default TourPage;
