import React from "react";
import "./PageDetailsDescription.css";

function PageDetailsDescription({ tour }) {
  return (
    <div className="page-details-description">
      <div className="page-details-description-box">
        <p className="page-details-heading">{`about ${tour.name} tour`}</p>
        {tour.description.split("/n").map((section, i) => {
          return (
            <p className="page-details-description-text" key={i}>
              {section}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default PageDetailsDescription;
