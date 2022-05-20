import React from "react";
import "./App.css";

import UserContextProvider from "./context/UserContextProvider";
import ToursContextProvider from "./context/ToursContextProvider";

import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
import Tours from "./components/tours/Tours";
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ToursContextProvider>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Tours />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
          </Routes>
        </ToursContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
