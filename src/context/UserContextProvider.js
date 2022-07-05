import React, { useState } from "react";
import UserContext from "./UserContext.js";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";
function UserContextProvider({ children }) {
  //sets state of user throughout the app
  const [myData, setMyData] = useState({});
  const [error, setError] = useState("");
  const [updateDataLoading, setUpdateDataLoading] = useState(false);
  const [updatePasswordLoading, setUpdatePasswordLoading] = useState(false);
  const [updateDataSuccess, setUpdateDataSuccess] = useState("");
  const [updatePasswordSuccess, setUpdatePasswordSuccess] = useState("");
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
            window.location.reload();
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
    } else {
      window.location.reload();
      setError("Token expired. Please login again.");
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2000);
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
          if (
            res.data.message === "Your token has expired! Please log in again!"
          ) {
            localStorage.removeItem("token");
            window.location.reload();
            setTimeout(() => {
              navigate("/login", { replace: true });
              setError("");
            }, 2000);
          }
        } else {
          setMyData(res.data.data.updatedDoc);
          setUpdateDataSuccess("You have successfully update your data.");
        }
        setUpdateDataLoading(false);
      })
      .catch((err) => {
        // handle error
        setError("Something went wrong. Please try again later.");
        setUpdateDataLoading(false);
      });
    setTimeout(() => {
      setUpdateDataSuccess("");
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
          if (
            res.data.message === "Your token has expired! Please log in again!"
          ) {
            localStorage.removeItem("token");
            window.location.reload();
            setTimeout(() => {
              navigate("/login", { replace: true });
              setError("");
            }, 2000);
          }
        } else {
          localStorage.setItem("token", res.data.token);
          setUpdatePasswordSuccess(
            "You have successfully update your password."
          );
        }
        setUpdatePasswordLoading(false);
      })
      .catch((err) => {
        // handle error
        setError("Something went wrong. Please try again later.");
        setUpdatePasswordLoading(false);
      });
    setTimeout(() => {
      setUpdatePasswordSuccess("");
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
        updateDataSuccess,
        updatePasswordSuccess,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
