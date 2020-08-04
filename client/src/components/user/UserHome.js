import React, { useContext } from "react";
import UserContext from "./UserContext";

/**
 * User Home Page
 */

const UserHome = (props) => {
  let context = useContext(UserContext);
  let user = context.userData.user;
  return (
    <>
      {user && (
        <div>
          <h1>Welcome {user.name} </h1>
          <h2>email: {user.email}</h2>
        </div>
      )}
    </>
  );
};

export default UserHome;
