import React, { useContext } from "react";
import ToursContext from "../../context/ToursContext";
function Tours() {
  const value = useContext(ToursContext);
  console.log(value);
  return <div className="login">Tours</div>;
}

export default Tours;
