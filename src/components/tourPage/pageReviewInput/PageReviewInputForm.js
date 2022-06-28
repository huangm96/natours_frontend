import React, { useState, useContext } from "react";
import Review from "./../../../context/ReviewContext";
import { BsStarFill, BsStar } from "react-icons/bs";
import * as Yup from "yup";

import { Formik, Form } from "formik";
import {
  MyReviewTextarea,
  MyFormButton,
  FormFeedback,
} from "./../../form/FormElements";
const PageReviewInputForm = ({ tour }) => {
  const [rating, setRating] = useState(0);
  const { postReview, loading, success, error } = useContext(Review);
  const inputStars = () => {
    const list = [];

    for (let i = 1; i <= rating; i++) {
      list.push(
        <BsStarFill
          className="review-stars-icon"
          key={i}
          onClick={() => {
            setRating(i);
          }}
        />
      );
    }
    for (let i = rating + 1; i <= 5; i++) {
      list.push(
        <BsStar
          className="review-stars-icon"
          key={i}
          onClick={() => {
            setRating(i);
          }}
        />
      );
    }
    return list;
  };
  return (
    <div
      style={{
        flexGrow: 100,
        marginLeft: "2rem",
      }}
    >
      <Formik
        enableReinitialize={true}
        initialValues={{
          rating: rating || 0,
          review: "",
        }}
        validationSchema={Yup.object({
          rating: Yup.number()
            .required("Please give a rating to this tour")
            .min(1)
            .max(5),
          review: Yup.string()
            .required("Review cannot be empty.")
            .min(5, "Must be more than or equal to 5 characters")
            .max(500, "Must be less than or equal to 500 characters"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          postReview(tour.id, values);
          setSubmitting(false);

          resetForm();
          setRating(0);
        }}
      >
        {(formik) => (
          <Form>
            {inputStars()}
            {formik.errors.rating ? (
              <div className="form-element-error">{formik.errors.rating}</div>
            ) : null}
            <MyReviewTextarea
              name="review"
              rows="8"
              placeholder="Leave your comment here..."
            />
            <MyFormButton
              loading={loading}
              text="Submit"
              style={{ float: "right" }}
            />
            <FormFeedback error={error} success={success} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PageReviewInputForm;
