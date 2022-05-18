import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
function Header() {
  const value = useContext(UserContext);
  console.log(value);
  return (
    <div className="Header">
      <a href="#">All tours</a>
      logo
      <div>login sign up</div>
    </div>
  );
}

export default Header;
