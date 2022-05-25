import React from "react";
import "./App.css";

import UserContextProvider from "./context/UserContextProvider";
import ToursContextProvider from "./context/ToursContextProvider";
import TourImagesContextProvider from "./context/TourImagesContextProvider";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
import Tours from "./components/tours/Tours";
import TourPage from "./components/tourPage/TourPage";
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ToursContextProvider>
          <TourImagesContextProvider>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<Tours />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="tours">
                  <Route path=":tourId" element={<TourPage />} />
                </Route>
              </Route>
            </Routes>
          </TourImagesContextProvider>
        </ToursContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
