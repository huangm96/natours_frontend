import React, { useEffect, useContext } from "react";
import ReviewContext from "./../../../context/ReviewContext";
import { largeSpinnerIcon } from "./../../../utils/loadingIcon";
import { errorMessage } from "./../../../utils/errorMessage";
import MyReviewItem from "./MyReviewItem";
import "./MyReviews.css";
function MyReviews() {
  const { myReviews, getMyReviews, loading, error } = useContext(ReviewContext);
  useEffect(() => {
    getMyReviews();
  }, []);
  if (loading) {
    return largeSpinnerIcon();
  }
  if (error) {
    return errorMessage();
  }
  return myReviews.length ? (
    <div className="user-page-content my-reviews-container">
      <p className="green-heading my-reviews-header">Your Reviews:</p>
      {myReviews.map((review) => {
        return <MyReviewItem key={review.id} review={review} />;
      })}
    </div>
  ) : (
    <p className="my-reviews-message">You have not written any reviews</p>
  );
}

export default MyReviews;
