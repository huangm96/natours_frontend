import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ToursContext from "./../../context/ToursContext";
import { largeSpinnerIcon } from "./../../utils/loadingIcon";
import { errorMessage } from "./../../utils/errorMessage";
import PageHeader from "./pageHeader/PageHeader";
import PageDetails from "./pageDetail/PageDetails";
import PageImages from "./pageImages/PageImages";
import PageMap from "./pageMap/PageMap";
import PageReviews from "./pageReviews/PageReviews";
import PageReviewInput from "./pageReviewInput/PageReviewInput";
import PageFooter from "./pageFooter/PageFooter";
function TourPage() {
  const { tour, getTourById, loading, error } = useContext(ToursContext);
  const { tourId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getTourById(tourId);
  }, []);
  if (loading) {
    return largeSpinnerIcon();
  }
  if (tour && tour.id) {
    return (
      <div className="tour-page-container">
        <PageHeader tour={tour} />
        <PageDetails tour={tour} />
        <PageImages tour={tour} />
        <PageMap tour={tour} />
        <PageReviews tour={tour} />
        <PageReviewInput tour={tour} />
        <PageFooter tour={tour} />
      </div>
    );
  }
  return <>{error ? errorMessage(error) : null}</>;
}

export default TourPage;
