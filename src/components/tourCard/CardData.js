import React from "react";
import "./CardData.css";

function CardData({ Icon, data }) {
  return (
    <div className="card-data-container">
      {Icon ? (
        <Icon size="1.5rem" color="#7dd56f" className="card-data-icon" />
      ) : null}

      <span>{data}</span>
    </div>
  );
}

export default CardData;
