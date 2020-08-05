import React, { useContext } from "react";
import UserContext from "../UserContext";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation({ user }) {
  const { handleLogout } = useContext(UserContext);
  return (
    <Navbar bg="light" expand="lg">
      <Nav className="mr-auto">
        <Nav.Link href="#home">{user.name}</Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
