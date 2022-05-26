import React from "react";

function PageFooterContent({ tourDuration }) {
  return (
    <div>
      <p className="green-heading">What are you waiting for?</p>
      <p>{`${tourDuration} days. 1 adventure. Infinite memories. Make it yours today!`}</p>
    </div>
  );
}

export default PageFooterContent;
