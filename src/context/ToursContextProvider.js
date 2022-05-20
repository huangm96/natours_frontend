import React, { useState, useEffect } from "react";
import ToursContext from "./ToursContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Buffer } from "buffer";
function ToursProvider({ children }) {
  //sets state of user throughout the app
  const [tours, setTours] = useState([]);

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
  const getImageCover = (id) => {
    axiosWithAuth()
      .get(`/api/v1/tourPhotos/${id}`)
      .then((res) => {
        const newTours = tours.map((tour) => {
          if (tour.imageCover === id) {
            //   conver buffer to img
            const imgBuffer = new Buffer.from(res.data.data.img.data).toString(
              "base64"
            );
            tour.imageCover = `data:${res.data.data.contentType};base64, ${imgBuffer}`;
          }
          return tour;
        });
        setTours(newTours);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <ToursContext.Provider value={{ tours, getImageCover }}>
      {children}
    </ToursContext.Provider>
  );
}

export default ToursProvider;
