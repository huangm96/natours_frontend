import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import ReviewContext from "../../../context/ReviewContext";
import { displayUserAvatar } from "../../userAvatar/userAvatar";
import PageReviewInputForm from "./PageReviewInputForm";
import "./PageReviewInput.css";
const PageReviewInput = () => {
  const { user } = useContext(AuthContext);
  if (user && user.id) {
    return (
      <div className="page-review-input-container">
        {displayUserAvatar(user)}

        <PageReviewInputForm />
      </div>
    );
  }
  return null;
};

export default PageReviewInput;
