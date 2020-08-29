import React, { useContext } from "react";
import UserContext from "../UserContext";
import Navigation from "./Navigation";
import Contributions from "./contribution/Contributions";
import RiverDisplay from "./river-display/RiverDisplay";

/**
 * User Home Page
 */

const UserHome = () => {
  const { userData } = useContext(UserContext);
  let user = userData.user;

  return user ? (
    <div className="container-fluid vh-100">
      <div className="h-100 d-flex flex-column">
        <Navigation user={user} />
        <div className="row flex-grow-1">
          <div className="col-3 border">
            <Contributions />
          </div>
          <div className="col-9 border">
            <RiverDisplay />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default UserHome;
