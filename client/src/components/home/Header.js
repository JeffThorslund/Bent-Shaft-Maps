import React from "react";
import Image from "react-bootstrap/Image";
import KayakLogo from "../../assets/KayakLogo.png";

const Header = () => {
  return (
    <div className="d-flex flex-row justify-content-center">
      <Image className="kayak-header-logo" src={KayakLogo} alt="logo" />
      <div className="d-flex flex-column justify-content-center">
        <h1 id="title">BENT SHAFT MAPS</h1>
        <h2 id="subtitle">WHITEWATER IMMORTALIZED</h2>
      </div>
    </div>
  );
};

export default Header;
