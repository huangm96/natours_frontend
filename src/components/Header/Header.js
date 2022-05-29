import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { convertBufferToImage } from "../../utils/convertBufferToImage";

import UserContext from "../../context/UserContext";
function Header() {
  const { user } = useContext(UserContext);
  console.log(user);
  let userImg = "";
  if (user.avatar) {
    userImg = convertBufferToImage(
      user.avatar.img.data,
      user.avatar.contentType
    );
  }

  return (
    <div className="header-container">
      <Link to="/" className="text-btn header-nav ">
        ALL TOURS
      </Link>
      <img src="/img/logo-white.png" alt="white-logo" className="header-logo" />

      <div className="header-auth">
        {user.id ? (
          <>
            <div to="login" className="text-btn header-nav">
              Logout
            </div>
            <div className="header-user-box">
              {userImg ? (
                <img src={userImg} alt={user.name} className="user-avatar" />
              ) : (
                <img
                  src="/img/default-user-img.jpg"
                  className="user-avatar"
                  alt={user.name}
                />
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="login" className="text-btn header-nav">
              LOGIN
            </Link>
            <Link to="signup" className=" header-nav">
              <div className="header-btn">
                <p className="header-text">SIGN UP</p>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
