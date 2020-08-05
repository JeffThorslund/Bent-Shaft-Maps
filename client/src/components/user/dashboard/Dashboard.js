import React, { useContext } from "react";
import UserContext from "../UserContext";
import Navigation from "./Navigation";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

/**
 * User Home Page
 */

const UserHome = () => {
  const { userData } = useContext(UserContext);
  let user = userData.user;
  return (
    <Container>
      {user && (
        <>
          <Navigation user={user} />
          <div>This is the main section</div>
        </>
      )}
    </Container>
  );
};

export default UserHome;
