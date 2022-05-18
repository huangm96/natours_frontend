import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

import UserContextProvider from "./context/UserContextProvider";
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
      </UserContextProvider>
    </div>
  );
}

export default App;
