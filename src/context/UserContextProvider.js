import React, { useState } from "react";
import UserContext from "./UserContext.js";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";

function UserContextProvider({ children }) {
  //sets state of user throughout the app
  const [myData, setMyData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const getMyData = () => {
    if (localStorage.getItem("token")) {
      setError("");
      setLoading(true);
      axiosWithAuth()
        .get(`/users/getMe`, {
          validateStatus: function (status) {
            return status < 600; // Reject only if the status code is greater than or equal to 600
          },
        })
        .then((res) => {
          if (res.data.status !== "success") {
            localStorage.removeItem("token");
            setError("Token expired. Please login again.");
            setTimeout(() => {
              navigate("/login", { replace: true });
            }, 2000);
          } else {
            setMyData(res.data.data);
          }
          setLoading(false);
        })
        .catch((err) => {
          // handle error
          setError("Something went wrong. Please try again later.");
          setLoading(false);
        });
    }
  };

  return (
    <UserContext.Provider value={{ myData, getMyData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
