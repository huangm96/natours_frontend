import React from "react";
import { useParams } from "react-router-dom";

function TourPage() {
  let urlParams = useParams();
  console.log(urlParams);
  return <div className="home">page</div>;
}

export default TourPage;
