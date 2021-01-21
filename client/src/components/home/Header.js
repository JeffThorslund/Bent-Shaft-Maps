import React from 'react';
import Image from 'react-bootstrap/Image';
import KayakLogo from '../../assets/KayakLogoSVG.svg';

/**
 * Header containing title, subtitle, and logo.
 */

const Header = () => (
  <div className="d-flex flex-row justify-content-center py-4 header">
    <Image
      className="kayak-header-logo img-fluid mx-4"
      src={KayakLogo}
      alt="logo"
    />
    <div className="d-flex flex-column justify-content-center">
      <h1>BENT SHAFT MAPS</h1>
      <h2>WHITEWATER IMMORTALIZED</h2>
    </div>
  </div>
);

export default Header;
