import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function UserProvider({ children }) {
  //sets state of user throughout the app
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setUser({ name: "Min" });
  }, []);
  const signup = (data, resetForm) => {
    setError("");
    setLoading(true);
    axiosWithAuth()
      .post(`/users/signup`, data, {
        validateStatus: function (status) {
          return status < 600; // Reject only if the status code is greater than or equal to 600
        },
      })
      .then((res) => {
        if (res.data.status === "error") {
          setError(res.data.message);
        } else {
          setUser(res.data.data.user);
          localStorage.setItem("token", res.data.token);
          setSuccess("You have successfully registered and logged in.");
          resetForm();
        }
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        if (error.message) setError(error.message);
        else {
          setError("Something went wrong. Please try again later.");
        }
        setLoading(false);
      });
    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };
  return (
    <UserContext.Provider value={{ user, signup, error, success, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
