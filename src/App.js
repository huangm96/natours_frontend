import React from "react";
import "./App.css";

import UserContextProvider from "./context/UserContextProvider";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
import Tours from "./components/tours/Tours";
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Tours />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
