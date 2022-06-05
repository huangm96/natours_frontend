import React, { useEffect, useContext } from "react";
import BookingContext from "../../../context/BookingContext";
import BookedItem from "./BookedItem";
import "./MyBooking.css";
function MyBooking() {
  const { getMyBooking, myBooking } = useContext(BookingContext);
  useEffect(() => {
    getMyBooking();
  }, []);
  console.log(myBooking);
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
  return (
    <div className="my-booking-container">
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
