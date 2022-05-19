import React, { useState, useEffect } from "react";
import ToursContext from "./ToursContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function ToursProvider({ children }) {
  //sets state of user throughout the app
  const [Tours, setTours] = useState([]);
  useEffect(() => {
    getAllTours();
  }, []);

  const getAllTours = () => {
    axiosWithAuth()
      .get("/api/v1/tours")
      .then((res) => {
        setTours(res.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <ToursContext.Provider value={{ Tours }}>{children}</ToursContext.Provider>
  );
}

export default ToursProvider;
