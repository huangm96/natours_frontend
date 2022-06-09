import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { displayUserAvatar } from "../../userAvatar/userAvatar";
import PageReviewInputForm from "./PageReviewInputForm";
import "./PageReviewInput.css";
const PageReviewInput = ({ tour }) => {
  const { user } = useContext(AuthContext);
  if (user && user.id) {
    return (
      <div className="page-review-input-container">
        {displayUserAvatar(user)}

        <PageReviewInputForm tour={tour} />
      </div>
    );
  }
  return null;
};

export default PageReviewInput;
