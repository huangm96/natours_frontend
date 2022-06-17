import React, { useState, useEffect } from "react";
import ToursContext from "./ToursContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { convertBufferToImage } from "../utils/convertBufferToImage";
import { useNavigate } from "react-router-dom";

function ToursContextProvider({ children }) {
  //sets state of user throughout the app
  const [tours, setTours] = useState([]);
  const [tour, setTour] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    getAllTours();
  }, []);
  let navigate = useNavigate();

  const getAllTours = () => {
    setLoading(true);
    setError("");
    axiosWithAuth()
      .get("/tours")
      .then((res) => {
        setTours(res.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setError(error);
        setLoading(false);
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
    setLoading(true);
    setError("");
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
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoading(false);
        setError(error);
      });
  };
  return (
    <ToursContext.Provider
      value={{ tours, getImageCover, getTourById, tour, loading, error }}
    >
      {children}
    </ToursContext.Provider>
  );
}

export default ToursContextProvider;
