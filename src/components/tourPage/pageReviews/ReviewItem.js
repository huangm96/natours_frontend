import React from "react";
import "./ReviewItem.css";
import ReviewStars from "../../../utils/ReviewStars.js";
import ReviewCreatedTime from "./ReviewCreatedTime";
import { displayUserAvatar } from "../../userAvatar/userAvatar";

function ReviewItem({ review }) {
  return (
    <div className="review-item-container">
      <div className="review-info">
        {displayUserAvatar(review.user)}

        <p>{review.user.name}</p>
      </div>
      <div className="review-info">
        <ReviewStars rating={review.rating} />
        <ReviewCreatedTime time={review.createdAt} />
      </div>

      <p>{review.review}</p>
    </div>
  );
}

export default ReviewItem;
