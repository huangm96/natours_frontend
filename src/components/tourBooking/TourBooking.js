import React, { useEffect, useContext } from "react";
import BookingContext from "../../context/BookingContext";
import ToursContext from "../../context/ToursContext";
import { useParams } from "react-router-dom";
function TourBooking() {
  const { tourBooking, getTourBooking } = useContext(BookingContext);
  const { tour, getTourById } = useContext(ToursContext);

  const { tourId } = useParams();
  useEffect(() => {
    getTourBooking(tourId);
    getTourById(tourId);
  }, []);
  console.log(tourBooking);
  console.log(tour);
  return <div className="tour-booking-container">Booking</div>;
}

export default TourBooking;
