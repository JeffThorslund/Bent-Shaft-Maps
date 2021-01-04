import React, { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { paramCase } from "change-case";
import { useParams } from "react-router-dom";

import Modal from "react-bootstrap/Modal";

import Rapid from "../rapid/Rapid";
import Map from "./Map";
import GeneralButton from "../general/GeneralButton";
import MobileAlert from "./MobileAlert";
import Slider from "./Slider";

/**
 * Container that displays all information specific to a single section.
 * This includes the level slider and the overview map.
 * Chooses which rapid should be displayed and renders the corresponding Rapid.js.
 */

const Section = ({ section, riverId }) => {
  let { rapid_path } = useParams();

  const [level, setLevel] = useState(0);
  const [mapIsShowing, setMapIsShowing] = useState(false);
  const [isMobileAlertActive, setIsMobileAlertActive] = useState(false);

  //If on mobile, and in portrait mode, tell user to flip phone sideways
  useLayoutEffect(() => {
    const shouldMobileAlertRender = () => {
      let isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        navigator.userAgent
      );
      let isPortrait = window.screen.height > window.screen.width;
      setIsMobileAlertActive(isMobile && isPortrait ? true : false);
    };
    window.addEventListener("resize", shouldMobileAlertRender);
    shouldMobileAlertRender();
    return () => window.removeEventListener("resize", shouldMobileAlertRender);
  }, []);

  const toggleMap = () => {
    setMapIsShowing((prevMapIsShowing) => {
      return !prevMapIsShowing;
    });
  };

  // Create Rapid Instance
  const rapid = section.rapids.find(
    (rapid) => rapid_path === paramCase(rapid.name)
  );

  return (
    <>
      {isMobileAlertActive && window.screen.height > window.screen.width ? (
        <MobileAlert setIsMobileAlertActive={setIsMobileAlertActive} />
      ) : (
        <Rapid
          riverId={riverId}
          sectionId={section.id}
          rapid={rapid}
          section={section}
          level={level}
        />
      )}

      <Modal
        dialogClassName="map"
        show={mapIsShowing}
        onHide={toggleMap}
        centered
      >
        <Map toggleMap={toggleMap} river={section} />
      </Modal>

      <div id="slider-position">
        <Slider
          min={section.levelRange[0]}
          max={section.levelRange[1]}
          units={section.levelUnits}
          level={level}
          setLevel={setLevel}
        />
      </div>

      <div id="map-position">
        <GeneralButton onClick={toggleMap} text="Map" />
      </div>

      <div id="home-position">
        <GeneralButton to="/" text="Home" />
      </div>
    </>
  );
};

Section.propTypes = {
  /** Section data object */
  section: PropTypes.object.isRequired,
};

export default withRouter(Section);
