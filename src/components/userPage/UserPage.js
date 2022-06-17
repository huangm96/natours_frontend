import React from "react";
import UserPageNav from "./userPageNav/UserPageNav";
import { Outlet } from "react-router-dom";
import "./UserPage.css";
function UserPage() {
  return (
    <div className="user-page-container">
      <UserPageNav />
      <Outlet />
    </div>
  );
}

export default UserPage;
