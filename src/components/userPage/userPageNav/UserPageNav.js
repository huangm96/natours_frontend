import React from "react";
import { useLocation } from "react-router-dom";
import { BsStar } from "react-icons/bs";
import { AiOutlineSetting, AiOutlineCreditCard } from "react-icons/ai";
import { RiSuitcaseLine } from "react-icons/ri";
import UserPageNavItem from "./UserPageNavItem";
import "./UserPageNav.css";
function UserPageNav() {
  let location = useLocation().pathname.split("/");
  let path = location[location.length - 1];
  return (
    <nav className="user-page-nav-container">
      <UserPageNavItem
        Icon={AiOutlineSetting}
        currentPath={path}
        goToPath="mysetting"
        text="Setting"
      />
      <UserPageNavItem
        Icon={RiSuitcaseLine}
        currentPath={path}
        goToPath="mybooking"
        text="My Booking"
      />
      <UserPageNavItem
        Icon={BsStar}
        currentPath={path}
        goToPath="myreviews"
        text="My Reviews"
      />
      <UserPageNavItem
        Icon={AiOutlineCreditCard}
        currentPath={path}
        goToPath="mybilling"
        text="Billing"
      />
    </nav>
  );
}

export default UserPageNav;
