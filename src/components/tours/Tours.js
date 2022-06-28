import React, { useContext } from "react";
import ToursContext from "./../../context/ToursContext";
import TourCard from "./../tourCard/TourCard";
import { largeSpinnerIcon } from "./../../utils/loadingIcon";
import { errorMessage } from "./../../utils/errorMessage";
import "./Tours.css";
function Tours() {
  const { tours, loading, error } = useContext(ToursContext);
  if (loading) {
    return largeSpinnerIcon();
  }
  if (error) {
    return errorMessage(error);
  }
  return (
    <div className="tours-container">
      {tours.map((tour) => {
        return <TourCard key={tour.id} tour={tour} />;
      })}
    </div>
  );
}

export default Tours;
