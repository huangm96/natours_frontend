import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./../header/Header.js";
import Footer from "./../footer/Footer.js";
function Home() {
  return (
    <div
      className="home"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
