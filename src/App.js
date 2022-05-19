import React from "react";
import "./App.css";
import Header from "./components/header/Header";

import UserContextProvider from "./context/UserContextProvider";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Header />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
