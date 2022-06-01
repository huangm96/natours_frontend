import React, { useState, useEffect } from "react";
import ToursContext from "./ToursContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { convertBufferToImage } from "../utils/convertBufferToImage";
function ToursContextProvider({ children }) {
  //sets state of user throughout the app
  const [tours, setTours] = useState([]);
  useEffect(() => {
    getAllTours();
  }, []);

  const getAllTours = () => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    axiosWithAuth()
      .get("/tours")
      .then((res) => {
        const toursList = res.data.data.map((tour) => {
          const tourStartDate = new Date(tour.startDates[0]);
          tour.nextStartDay = `${month[tourStartDate.getMonth()]} ${
            tourStartDate.getYear() + 1900
          }`;
          return tour;
        });
        setTours(toursList);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const getImageCover = (id) => {
    if (tours && tours[0].imageCoverPicture) {
      return;
    }
    axiosWithAuth()
      .get(`/tourPhotos/${id}`)
      .then((res) => {
        const newTours = tours.map((tour) => {
          if (tour.imageCover === id) {
            //   conver buffer to img
            tour.imageCoverPicture = convertBufferToImage(
              res.data.data.img.data,
              res.data.data.contentType
            );
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

export default ToursContextProvider;
