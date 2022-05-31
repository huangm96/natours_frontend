import React from "react";
import { Link } from "react-router-dom";

function UserPageNavItem({ Icon, currentPath, goToPath, text }) {
  return (
    <Link
      to={goToPath}
      className="user-page-nav-item"
      style={
        currentPath === goToPath ? { borderLeft: "4px solid white" } : null
      }
    >
      <Icon className="user-page-nav-icon" />
      <p>{text}</p>
    </Link>
  );
}

export default UserPageNavItem;
