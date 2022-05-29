import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";

function UserProvider({ children }) {
  //sets state of user throughout the app
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setUser({ name: "Min" });
  }, []);
  let navigate = useNavigate();
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
        if (res.data.status !== "success") {
          setError(res.data.message);
        } else {
          setUser(res.data.data.user);
          localStorage.setItem("token", res.data.token);
          setSuccess("You have successfully registered and logged in.");
          resetForm();
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 2000);
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
  const login = (data, resetForm) => {
    setError("");
    setLoading(true);
    axiosWithAuth()
      .post(`/users/login`, data, {
        validateStatus: function (status) {
          return status < 600; // Reject only if the status code is greater than or equal to 600
        },
      })
      .then((res) => {
        if (res.data.status !== "success") {
          setError(res.data.message);
        } else {
          setUser(res.data.data.user);
          localStorage.setItem("token", res.data.token);
          setSuccess("You have successfully logged in.");
          resetForm();
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 2000);
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
    <UserContext.Provider
      value={{ user, signup, login, error, success, loading, setError }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
