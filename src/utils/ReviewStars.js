import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
function ReviewStars({ rating }) {
  const getFullStars = () => {
    const list = [];

    for (let i = rating; i > 0; i--) {
      list.push(<BsStarFill className="review-stars-icon" key={i} />);
    }
    return list;
  };
  const getEmptyStars = () => {
    const list = [];
    for (let i = 5 - rating; i > 0; i--) {
      list.push(<BsStar className="review-stars-icon" key={i} />);
    }
    return list;
  };
  return (
    <div className="review-stars">
      {getFullStars()}
      {getEmptyStars()}
    </div>
  );
}

export default ReviewStars;
