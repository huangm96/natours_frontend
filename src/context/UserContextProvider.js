import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }) {
  //sets state of user throughout the app
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({ name: "Min" });
  }, []);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
