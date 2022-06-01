import React, { useEffect, useContext } from "react";
import PersonalInfo from "./PersonalInfo";
import UserContext from "../../../context/UserContext";
import ChangePassword from "./ChangePassword";
import "./MySetting.css";
function MySetting() {
  const { getMyData } = useContext(UserContext);
  useEffect(() => {
    getMyData();
  }, []);

  return (
    <div className="my-setting-container">
      <PersonalInfo />
      <ChangePassword />
    </div>
  );
}

export default MySetting;
