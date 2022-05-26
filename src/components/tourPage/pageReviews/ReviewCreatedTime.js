import React from "react";

function ReviewCreatedTime({ time }) {
  const getTime = () => {
    let createdTime = Date.now() - new Date(time);
    if (Math.floor(createdTime / 1000 / 60 / 60 / 24 / 30 / 12) > 0) {
      return `${Math.floor(
        createdTime / 1000 / 60 / 60 / 24 / 30 / 12
      )} years ago`;
    } else if (Math.floor(createdTime / 1000 / 60 / 60 / 24 / 30) > 0) {
      return `${Math.floor(createdTime / 1000 / 60 / 60 / 24 / 30)} months ago`;
    } else if (Math.floor(createdTime / 1000 / 60 / 60 / 24) > 0) {
      return `${Math.floor(createdTime / 1000 / 60 / 60 / 24)} days ago`;
    } else if (Math.floor(createdTime / 1000 / 60 / 60) > 0) {
      return `${Math.floor(createdTime / 1000 / 60 / 60)} hours ago`;
    } else if (Math.floor(createdTime / 1000 / 60) > 0) {
      return `${Math.floor(createdTime / 1000 / 60)} minutes ago`;
    } else {
      return `A few seconds ago`;
    }
  };

  return <p className="review-created-time">{getTime()}</p>;
}

export default ReviewCreatedTime;
