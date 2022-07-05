import React, { useEffect, useContext } from "react";
import BookingContext from "./../../../context/BookingContext";
import BookedItem from "./BookedItem";
import "./MyBooking.css";
import { largeSpinnerIcon } from "./../../../utils/loadingIcon";
import { errorMessage } from "./../../../utils/errorMessage";
function MyBooking() {
  const { getMyBooking, myBooking, loading, error } =
    useContext(BookingContext);
  useEffect(() => {
    getMyBooking();
  }, []);
  const getUpcomingTrip = (myBooking) => {
    const upcomingTrip = myBooking.map((booking) => {
      if (new Date(booking.tourStartDate) >= new Date()) {
        return <BookedItem key={booking.id} data={booking} />;
      }
      return null;
    });
    return upcomingTrip;
  };
  const getPastTrip = (myBooking) => {
    const pastTrip = myBooking.map((booking) => {
      if (new Date(booking.tourStartDate) < new Date()) {
        return <BookedItem key={booking.id} data={booking} />;
      }
      return null;
    });
    return pastTrip;
  };
  if (loading) {
    return largeSpinnerIcon();
  }
  if (error) {
    errorMessage(error);
  }
  console.log(error);
  return (
    <div className="user-page-content my-booking-container">
      <p className="green-heading my-booking-header">Upcoming Trips:</p>
      {getUpcomingTrip(myBooking).length ? (
        getUpcomingTrip(myBooking)
      ) : (
        <p className="my-booking-message">No trips booked...yet!</p>
      )}
      {getPastTrip(myBooking).length ? (
        <>
          <p className="green-heading my-booking-header">Past Trips:</p>
          {getPastTrip(myBooking)}
        </>
      ) : null}
    </div>
  );
}

export default MyBooking;
