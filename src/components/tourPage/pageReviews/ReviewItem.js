import React from "react";
import { convertBufferToImage } from "../../../utils/convertBufferToImage";
import "./ReviewItem.css";
import ReviewStars from "./ReviewStars.js";
import ReviewCreatedTime from "./ReviewCreatedTime";
function ReviewItem({ review }) {
  const userImg = convertBufferToImage(
    review.user.avatar.img.data,
    review.user.avatar.contentType
  );
  return (
    <div className="review-item-container">
      <div className="review-info">
        <img src={userImg} alt={review.user.name} className="user-avatar" />
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
