import React, { useState, useEffect } from "react";
import ToursContext from "./ToursContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { convertBufferToImage } from "../utils/convertBufferToImage";
import { useNavigate } from "react-router-dom";

function ToursContextProvider({ children }) {
  //sets state of user throughout the app
  const [tours, setTours] = useState([]);
  const [tour, setTour] = useState({});
  useEffect(() => {
    getAllTours();
  }, []);
  let navigate = useNavigate();

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
  const getTourById = (id) => {
    axiosWithAuth()
      .get(`/tours/${id}`, {
        validateStatus: function (status) {
          return status < 600; // Reject only if the status code is greater than or equal to 600
        },
      })
      .then((res) => {
        if (res.data.status.toLowerCase() !== "success") {
          navigate("/pageNotFound", { replace: true });
        } else {
          setTour(res.data.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <ToursContext.Provider value={{ tours, getImageCover, getTourById, tour }}>
      {children}
    </ToursContext.Provider>
  );
}

export default ToursContextProvider;
