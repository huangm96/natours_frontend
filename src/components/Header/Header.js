import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { displayUserAvatar } from "../userAvatar/userAvatar";
import AuthContext from "../../context/AuthContext";
function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="header-container">
      <Link to="/" className="text-btn header-nav ">
        ALL TOURS
      </Link>
      <img src="/img/logo-white.png" alt="white-logo" className="header-logo" />

      <div className="header-auth">
        {user && user.id ? (
          <>
            <div to="login" className="text-btn header-nav" onClick={logout}>
              Logout
            </div>
            <Link to="me" className="text-btn header-nav">
              <div className="header-user-box">
                {displayUserAvatar(user)}

                <p>{user.name.split(" ")[0]}</p>
              </div>
            </Link>
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
