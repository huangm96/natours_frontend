import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import UserContext from "../../context/UserContext";
function Header() {
  const value = useContext(UserContext);
  console.log(value);
  return (
    <div className="header-container">
      <Link to="/" className="btn-text header-nav ">
        ALL TOURS
      </Link>
      <img src="/img/logo-white.png" alt="white-logo" className="header-logo" />
      <div className="header-auth">
        <Link to="login" className="btn-text header-nav">
          LOGIN
        </Link>
        <Link to="signup" className=" header-nav">
          <div className="header-btn">
            <p className="header-text">SIGN UP</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
