import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";

function AuthContextProvider({ children }) {
  //sets state of user throughout the app
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      axiosWithAuth()
        .get(`/users/getMe`, {
          validateStatus: function (status) {
            return status < 600; // Reject only if the status code is greater than or equal to 600
          },
        })
        .then((res) => {
          if (res.data.status.toLowerCase() !== "success") {
            localStorage.removeItem("token");
          } else {
            setUser(res.data.data);
          }
        })
        .catch((err) => {
          localStorage.removeItem("token");
        });
    }
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
        if (res.data.status.toLowerCase() !== "success") {
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
    }, 3000);
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
        if (res.data.status.toLowerCase() !== "success") {
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
    }, 3000);
  };
  const logout = () => {
    setUser({});
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        error,
        success,
        loading,
        setError,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
