import React, { useEffect } from "react";
import UserPageNav from "./userPageNav/UserPageNav";
import { Outlet } from "react-router-dom";

function UserPage() {
  return (
    <div
      className="user-page-container"
      style={{ display: "flex", flexGrow: 10, margin: "5rem" }}
    >
      <UserPageNav />
      <Outlet />
    </div>
  );
}

export default UserPage;
