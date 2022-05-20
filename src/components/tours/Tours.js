import React, { useContext } from "react";
import ToursContext from "../../context/ToursContext";
import TourCard from "../tourCard/TourCard";
import "./Tours.css";

function Tours() {
  const { tours } = useContext(ToursContext);
  console.log(tours);
  return (
    <div className="tours-container">
      {tours.map((tour) => {
        return <TourCard key={tour.id} tour={tour} />;
      })}
    </div>
  );
}

export default Tours;
