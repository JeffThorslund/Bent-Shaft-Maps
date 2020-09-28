import React, { useContext } from "react";
import UserContext from "./UserContext";

function Navigation({ user }) {
  const { handleLogout } = useContext(UserContext);
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">{user.name}</li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item" onClick={handleLogout}>
          <a className="nav-link">Log Out</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
