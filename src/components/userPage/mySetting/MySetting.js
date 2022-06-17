import React, { useEffect, useContext } from "react";
import UserContext from "../../../context/UserContext";
import PersonalInfo from "./PersonalInfo";
import ChangePassword from "./ChangePassword";
import "./MySetting.css";
function MySetting() {
  const { getMyData } = useContext(UserContext);
  useEffect(() => {
    getMyData();
  }, []);

  return (
    <div className="user-page-content my-setting-container">
      <PersonalInfo />
      <ChangePassword />
    </div>
  );
}

export default MySetting;
