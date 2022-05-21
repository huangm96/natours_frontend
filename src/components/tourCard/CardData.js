import React from "react";

function CardData({ icon, data }) {
  return (
    <div className="cardData-container">
      <icon />
      <span>{data}</span>
    </div>
  );
}

export default CardData;
