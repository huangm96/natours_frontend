import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function ReviewStars({ rating }) {
  const getFullStars = () => {
    const list = [];
    const n = Math.floor((rating * 10) / 10);
    for (let i = n; i > 0; i--) {
      list.push(<BsStarFill className="review-stars-icon" key={i} />);
    }
    return list;
  };
  const getHalfStars = () => {
    const n = (rating * 10) % 10;
    if (n > 0) {
      return <BsStarHalf className="review-stars-icon" />;
    }
  };
  const getEmptyStars = () => {
    const list = [];
    const n = Math.floor((50 - rating * 10) / 10);
    for (let i = n; i > 0; i--) {
      list.push(<BsStar className="review-stars-icon" key={i} />);
    }
    return list;
  };
  return (
    <div className="review-stars">
      {getFullStars()}
      {getHalfStars()}
      {getEmptyStars()}
    </div>
  );
}

export default ReviewStars;
