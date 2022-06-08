import React, { useState } from "react";
import ReviewContext from "./ReviewContext.js";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function ReviewContextProvider({ children }) {
  const [reviews, setReviews] = useState([]);

  const getTourReviews = (tourId) => {
    axiosWithAuth()
      .get(`/tours/${tourId}/reviews`)
      .then((res) => {
        setReviews(res.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <ReviewContext.Provider value={{ getTourReviews, reviews }}>
      {children}
    </ReviewContext.Provider>
  );
}

export default ReviewContextProvider;
