import React, { useState } from "react";
import TourImagesContext from "./TourImagesContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
function TourImagesContextProvider({ children }) {
  //sets state of user throughout the app
  const [imagesList, setImagesList] = useState([]);

  const getTourImages = async (images) => {
    const list = await Promise.all(
      images.map(async (id) => {
        try {
          const res = await axiosWithAuth().get(`/api/v1/tourPhotos/${id}`);
          return res.data.data;
        } catch (err) {
          console.log(err);
        }
      })
    );

    setImagesList([...list]);
  };

  return (
    <TourImagesContext.Provider value={{ imagesList, getTourImages }}>
      {children}
    </TourImagesContext.Provider>
  );
}

export default TourImagesContextProvider;
