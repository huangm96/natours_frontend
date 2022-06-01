import React, { useState } from "react";
import UserContext from "./UserContext.js";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";

function UserContextProvider({ children }) {
  //sets state of user throughout the app
  const [myData, setMyData] = useState({});
  const [error, setError] = useState("");
  const [updateDataLoading, setUpdateDataLoading] = useState(false);
  const [updatePasswordLoading, setUpdatePasswordLoading] = useState(false);
  const [success, setSuccess] = useState("");

  let navigate = useNavigate();

  const getMyData = () => {
    if (localStorage.getItem("token")) {
      setError("");
      setUpdateDataLoading(true);
      axiosWithAuth()
        .get(`/users/getMe`, {
          validateStatus: function (status) {
            return status < 600; // Reject only if the status code is greater than or equal to 600
          },
        })
        .then((res) => {
          if (res.data.status.toLowerCase() !== "success") {
            localStorage.removeItem("token");
            setError("Token expired. Please login again.");
            setTimeout(() => {
              navigate("/login", { replace: true });
            }, 2000);
          } else {
            setMyData(res.data.data);
          }
          setUpdateDataLoading(false);
        })
        .catch((err) => {
          // handle error
          setError("Something went wrong. Please try again later.");
          setUpdateDataLoading(false);
        });
    }
  };
  const updateMyData = (data) => {
    setError("");
    setUpdateDataLoading(true);
    axiosWithAuth()
      .patch(`/users/updateMe`, data, {
        validateStatus: function (status) {
          return status < 600; // Reject only if the status code is greater than or equal to 600
        },
      })
      .then((res) => {
        if (res.data.status.toLowerCase() !== "success") {
          setError(res.data.message);
        } else {
          setMyData(res.data.data.updatedDoc);
          setSuccess("You have successfully update your data.");
        }
        setUpdateDataLoading(false);
      })
      .catch((err) => {
        // handle error
        setError("Something went wrong. Please try again later.");
        setUpdateDataLoading(false);
      });
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };
  const updateMyPassword = (data) => {
    setError("");
    setUpdatePasswordLoading(true);
    axiosWithAuth()
      .patch(`/users/updateMyPassword`, data, {
        validateStatus: function (status) {
          return status < 600; // Reject only if the status code is greater than or equal to 600
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.status.toLowerCase() !== "success") {
          setError(res.data.message);
        } else {
          localStorage.setItem("token", res.data.token);
          setSuccess("You have successfully update your password.");
        }
        setUpdatePasswordLoading(false);
      })
      .catch((err) => {
        // handle error
        setError("Something went wrong. Please try again later.");
        setUpdatePasswordLoading(false);
      });
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };
  return (
    <UserContext.Provider
      value={{
        myData,
        getMyData,
        updateMyData,
        updateMyPassword,
        updateDataLoading,
        updatePasswordLoading,
        error,
        success,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
