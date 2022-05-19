import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../header/Header";
function Home() {
  return (
    <div className="home">
      <Header />
      <Outlet />
    </div>
  );
}

export default Home;
