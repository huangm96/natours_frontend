import React, { useState } from "react";
import UserContext from "./UserContext.js";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";

function UserProvider({ children }) {
  //sets state of user throughout the app
  const [me, setMe] = useState({});

  return (
    <UserContext.Provider
      value={{
        me,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
