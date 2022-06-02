import React, { useEffect, useContext } from "react";
import BookingContext from "../../../context/BookingContext";
function MyBooking() {
  const { getMyBooking, myBooking } = useContext(BookingContext);
  useEffect(() => {
    getMyBooking();
  }, []);
  console.log(myBooking);
  return <div className="user-page-container">Booking</div>;
}

export default MyBooking;
