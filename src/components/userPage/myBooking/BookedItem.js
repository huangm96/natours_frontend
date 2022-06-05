import React, { useState, useEffect, useContext } from "react";
import TourImagesContext from "../../../context/TourImagesContext";
import { getDate } from "./../../../utils/getDate";
const BookedItem = ({ data }) => {
  const { getOneImage } = useContext(TourImagesContext);
  const [image, setImage] = useState("");
  useEffect(() => {
    Promise.resolve(getOneImage(data.tour.imageCover)).then((res) =>
      setImage(res)
    );
  }, []);

  return (
    <div className="my-booking-item-container">
      <img src={image} alt={data.tour.name} className="my-booking-item-image" />
      <div className="my-booking-item">
        <p className="my-booking-item-cell-xl my-booking-item-title">
          {data.tour.name}
        </p>
        <div className="my-booking-item-cell-xl">
          <p className="my-booking-item-cell-header">Start Date</p>
          <p>{getDate(data.tourStartDate)}</p>
        </div>
        <div className="my-booking-item-cell">
          <p className="my-booking-item-cell-header">People</p>
          <p>{data.quantity}</p>
        </div>
        <div className="my-booking-item-cell">
          <p className="my-booking-item-cell-header">Paid</p>
          <p>${data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default BookedItem;
