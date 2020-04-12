import React from "react";

const NavBar = () => {
  const navBarStyle = {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100vw",
    height: "4vh",
    backgroundColor: "#232020",

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  const barItemStyle = {
    fontFamily: "Ruda",
    fontSize: "16px",
    paddingLeft: "40px",
    textAlign: "center",
    color: "#EEEEEE",
  };

  return (
    <div className="NavBar" style={navBarStyle}>
      <div id="map" className="barItem" style={barItemStyle}>
        Map
      </div>
    </div>
  );
};

export default NavBar;
