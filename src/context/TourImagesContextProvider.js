import React, { useState } from "react";
import TourImagesContext from "./TourImagesContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { convertBufferToImage } from "../utils/convertBufferToImage";

function TourImagesContextProvider({ children }) {
  //sets state of user throughout the app
  const [imagesList, setImagesList] = useState([]);
  const [image, setImage] = useState("");
  const getTourImages = async (images) => {
    const list = await Promise.all(
      images.map(async (id) => {
        try {
          const res = await axiosWithAuth().get(`/tourPhotos/${id}`);
          return res.data.data;
        } catch (err) {
          console.log(err);
        }
      })
    );
    setImagesList([...list]);
  };
  const getOneImage = (id) => {
    axiosWithAuth()
      .get(`/tourPhotos/${id}`)
      .then((res) => {
        setImage(
          convertBufferToImage(
            res.data.data.img.data,
            res.data.data.contentType
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <TourImagesContext.Provider
      value={{ imagesList, getTourImages, getOneImage, image }}
    >
      {children}
    </TourImagesContext.Provider>
  );
}

export default TourImagesContextProvider;
