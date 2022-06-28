import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./../../../context/AuthContext";
import { displayUserAvatar } from "./../../userAvatar/userAvatar";
import PageReviewInputForm from "./PageReviewInputForm";
import "./PageReviewInput.css";
const PageReviewInput = ({ tour }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="page-review-input-container">
      {user && user.id ? (
        <>
          {displayUserAvatar(user)}

          <PageReviewInputForm tour={tour} />
        </>
      ) : (
        <div>
          <span>You must </span>{" "}
          <Link to="/signup" className="page-auth-link">
            register
          </Link>{" "}
          <span> or </span>
          <Link to="/login" className="page-auth-link">
            login
          </Link>{" "}
          to post a comment.
        </div>
      )}
    </div>
  );
};

export default PageReviewInput;
