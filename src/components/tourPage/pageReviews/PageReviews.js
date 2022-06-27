import React, { useContext, useEffect } from "react";
import "./PageReviews.css";
import ReviewItem from "./ReviewItem";
import ReviewContext from "../../../context/ReviewContext";
function PageReviews({ tour }) {
  const { reviews, getTourReviews } = useContext(ReviewContext);
  useEffect(() => {
    getTourReviews(tour.id);
  }, []);
  if (reviews) {
    return (
      <div className="tour-page-reviews-container">
        {reviews.map((review, i) => {
          return <ReviewItem review={review} key={i} />;
        })}
      </div>
    );
  }
  return (
    <p className="tour-page-reviews-message">
      You can write the first review!!!
    </p>
  );
}

export default PageReviews;
