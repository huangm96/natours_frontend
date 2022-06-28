import React, { useState } from "react";
import BookingContext from "./BookingContext.js";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";

function BookingContextProvider({ children }) {
  const [myBooking, setMyBooking] = useState([]);
  const [tourBooking, setTourBooking] = useState({});
  const [tour, setTour] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const getMyBooking = () => {
    setError("");
    setLoading(true);
    axiosWithAuth()
      .get(`/bookings/myBookings`, {
        validateStatus: function (status) {
          return status < 600; // Reject only if the status code is greater than or equal to 600
        },
      })
      .then((res) => {
        if (res.data.status.toLowerCase() !== "success") {
          setError(res.data.message);
        } else {
          setMyBooking(res.data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        // handle error
        setError("Something went wrong. Please try again later.");
        setLoading(false);
      });
  };
  const getTourBooking = async (tourId) => {
    setError("");
    setLoading(true);

    let tour = {};
    try {
      tour = (await axiosWithAuth().get(`/tours/${tourId}`)).data.data;
    } catch (err) {
      if (err.response.data.status.toLowerCase() !== "success") {
        navigate("/pageNotFound", { replace: true });
      } else {
        setError(err);
      }
    }
    setTour(tour);
    let booking = await tour.startDates.reduce((current, date) => {
      return { ...current, [date.toString()]: [] };
    }, {});

    // setTourBooking(booking);
    axiosWithAuth()
      .get(`/tours/${tourId}/bookings`, {
        validateStatus: function (status) {
          return status < 600; // Reject only if the status code is greater than or equal to 600
        },
      })
      .then((res) => {
        if (res.data.status.toLowerCase() !== "success") {
          setError(res.data.message);
          if (
            res.data.message === "Your token has expired! Please log in again!"
          ) {
            localStorage.removeItem("token");
            window.location.reload();
            setTimeout(() => {
              navigate("/login", { replace: true });
              setError("");
            }, 2000);
          }
        } else {
          res.data.data.forEach((data) => {
            if (data.tourStartDate in booking) {
              booking[data.tourStartDate].push(data);
            }
          });

          setTourBooking(booking);
        }

        setLoading(false);
      })
      .catch((err) => {
        // handle error

        setError("Something went wrong. Please try again later.");
        setLoading(false);
      });
  };

  const createPaymentForm = (data, tourId) => {
    setError("");
    setLoading(true);
    axiosWithAuth()
      .post(`/bookings/checkout-session/${tourId}`, data, {
        validateStatus: function (status) {
          return status < 600; // Reject only if the status code is greater than or equal to 600
        },
      })
      .then((res) => {
        if (res.data.status.toLowerCase() !== "success") {
          setError(res.data.message);
        } else {
          window.open(res.data.session.url, "_blank");
          navigate("/", { replace: true });
        }
        setLoading(false);
      })
      .catch((err) => {
        // handle error
        setError("Something went wrong. Please try again later.");
        setLoading(false);
      });
  };
  return (
    <BookingContext.Provider
      value={{
        myBooking,
        getMyBooking,
        error,
        loading,
        getTourBooking,
        tourBooking,
        tour,
        createPaymentForm,
        success,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export default BookingContextProvider;
