import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../header/Header";
function Home() {
  return (
    <div
      className="home"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default Home;
