import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="">
      Page Not Found. Go back to the home page --- <Link to="/">Home</Link>
    </div>
  );
}

export default PageNotFound;
