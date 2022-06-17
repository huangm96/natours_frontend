import React, { useEffect, useContext } from "react";
import BookingContext from "../../context/BookingContext";
import { useParams } from "react-router-dom";
import { convertBufferToImage } from "./../../utils/convertBufferToImage";
import "./TourBooking.css";
import * as Yup from "yup";

import { Formik } from "formik";
import {
  MyForm,
  MyDateSelect,
  MyFormButton,
  FormFeedback,
  MyQuantitySelect,
} from "../form/FormElements";
import { largeSpinnerIcon } from "../../utils/loadingIcon";
import { errorMessage } from "../../utils/errorMessage";
function TourBooking() {
  const {
    tourBooking,
    getTourBooking,
    tour,
    createPaymentForm,
    loading,
    error,
    success,
  } = useContext(BookingContext);

  const { tourId } = useParams();
  useEffect(() => {
    getTourBooking(tourId);
  }, []);
  if (loading) {
    return largeSpinnerIcon();
  }
  if (tour && tour.id) {
    return (
      <div className="tour-booking-container">
        <Formik
          initialValues={{
            tourStartDate: "",
            quantity: 1,
          }}
          validationSchema={Yup.object({
            tourStartDate: Yup.string().required("Required"),
            quantity: Yup.number().required("Required").min(1),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            createPaymentForm(values, tour.id);
            setSubmitting(false);
            resetForm();
          }}
        >
          {(props) => (
            <MyForm heading="book your tour now!">
              <div
                className="tour-booking-tour-description"
                style={{ display: "flex" }}
              >
                <img
                  className="page-coverImage-picture"
                  src={convertBufferToImage(
                    tour.imageCover.img.data,
                    tour.imageCover.contentType
                  )}
                  alt="Tour ImageCover"
                  style={{ width: 250 }}
                />
                <div className="tour-booking-tour-description-text">
                  <p>Tour: {tour.name}</p>
                  <p>Duration: {tour.duration} days</p>
                  <p>Start Location: {tour.startLocation.description}</p>
                  <p>Price: ${tour.price}/person</p>
                </div>
              </div>

              <MyDateSelect
                label="Tour Start Date"
                name="tourStartDate"
                dates={tourBooking}
                maxGroupSize={tour.maxGroupSize}
              />
              <MyQuantitySelect
                label="Ticket"
                name="quantity"
                dates={tourBooking}
                maxGroupSize={tour.maxGroupSize}
                selectedDate={props.values.tourStartDate}
              />
              <MyFormButton
                style={{ alignSelf: "end" }}
                loading={loading}
                text="Payment"
              />
              <FormFeedback error={error} success={success} />
            </MyForm>
          )}
        </Formik>
      </div>
    );
  }
  return <>{error ? errorMessage(error) : null}</>;
}

export default TourBooking;
