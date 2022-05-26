import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import "./PageReviews.css";
import ReviewItem from "./ReviewItem";
function PageReviews({ tour }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`/tours/${tour.id}/reviews`)
      .then((res) => {
        setReviews(res.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
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
  return <div> No review yet</div>;
}

export default PageReviews;
