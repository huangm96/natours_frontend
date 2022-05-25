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
      .get("/api/v1/tours")
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
      .get(`/api/v1/tourPhotos/${id}`)
      .then((res) => {
        const newTours = tours.map((tour) => {
          if (tour.imageCover === id) {
            //   conver buffer to img
            const imgBuffer = new Buffer.from(res.data.data.img.data).toString(
              "base64"
            );
            tour.imageCoverPicture = `data:${res.data.data.contentType};base64, ${imgBuffer}`;
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
  const getTourGuides = (id) => {
    // if (tours && tours[0].imageCoverPicture) {
    //   return;
    // }

    axiosWithAuth()
      .get(`/api/v1/users/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  console.log(tours);
  return (
    <ToursContext.Provider value={{ tours, getImageCover, getTourGuides }}>
      {children}
    </ToursContext.Provider>
  );
}

export default ToursProvider;
