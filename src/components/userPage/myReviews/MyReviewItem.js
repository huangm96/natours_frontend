import React from "react";
import ReviewStars from "../../../utils/ReviewStars";
import { getDate } from "../../../utils/getDate";
const MyReviewItem = ({ review }) => {
  return (
    <div className="my-reviews-item-container">
      <div className="my-reviews-item-cell">
        <p className="my-reviews-item-cell-header">Tour</p>
        <p>{review.tour.name}</p>
      </div>

      <div className="my-reviews-item-cell">
        <p className="my-reviews-item-cell-xl my-reviews-item-cell-header">
          Rating
        </p>
        <ReviewStars rating={review.rating} />
      </div>
      <div className="my-reviews-item-cell-xl">
        <p className="my-reviews-item-cell-header">Review</p>
        <p>{review.review}</p>
      </div>
      <div className="my-reviews-item-cell">
        <p className="my-reviews-item-cell-header">Reviewed At</p>
        <p>{getDate(review.createdAt)}</p>
      </div>
    </div>
  );
};

export default MyReviewItem;
