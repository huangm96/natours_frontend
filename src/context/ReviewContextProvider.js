import React, { useState, useContext } from "react";
import ReviewContext from "./ReviewContext.js";
import AuthContext from "./AuthContext.js";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function ReviewContextProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [myReviews, setMyReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const getTourReviews = (tourId) => {
    setLoading(true);
    axiosWithAuth()
      .get(`/tours/${tourId}/reviews`)
      .then((res) => {
        setReviews(res.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoading(false);
      });
  };
  const postReview = (tourId, data) => {
    setError("");
    setLoading(true);
    axiosWithAuth()
      .post(`/tours/${tourId}/reviews`, data, {
        validateStatus: function (status) {
          return status < 600; // Reject only if the status code is greater than or equal to 600
        },
      })
      .then((res) => {
        if (res.data.status.toLowerCase() === "success") {
          res.data.data.doc.user = user;
          setReviews([res.data.data.doc, ...reviews]);
          setSuccess("Thank you for your review!");
          setTimeout(() => {
            setSuccess("");
          }, 2000);
        } else if (res.data.message.includes("Duplicate")) {
          setError(
            "You have already reviewed this tour. You can only review one time."
          );
        } else {
          setError(res.data.message);
        }
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setError("Something went wrong. Please try again later.");
        setLoading(false);
      });
  };
  const getMyReviews = () => {
    setLoading(true);
    axiosWithAuth()
      .get(`/reviews/myreviews`)
      .then((res) => {
        setMyReviews(res.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <ReviewContext.Provider
      value={{
        getTourReviews,
        reviews,
        postReview,
        loading,
        error,
        success,
        getMyReviews,
        myReviews,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}

export default ReviewContextProvider;