import React, { useContext } from "react";
import UserContext from "../UserContext";
import Navigation from "./Navigation";

/**
 * User Home Page
 */

const UserHome = () => {
  const { userData } = useContext(UserContext);
  let user = userData.user;

  return (
    <div className="container-fluid">
      {user && (
        <>
          <Navigation user={user} />
          <div>This is the main section</div>
        </>
      )}
    </div>
  );
};

export default UserHome;
