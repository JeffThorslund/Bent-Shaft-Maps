import React, { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { paramCase } from "change-case";

import Modal from "react-bootstrap/Modal";

import Rapid from "../rapid/Rapid";
import Map from "./Map";
import GeneralButton from "../general/GeneralButton";
import MobileAlert from "./MobileAlert";
import Slider from "./Slider";

/**
 * Container that displays all information specific to a single river.
 * This includes the level slider and the overview map.
 * Chooses which rapid should be displayed and renders the corresponding Rapid.js.
 */

const River = ({ river, url, match }) => {
  const [level, setLevel] = useState(0);
  const [mapIsShowing, setMapIsShowing] = useState(true);
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
  const rapidInstance = river.rapids.map((element, key) => {
    if (match.params.id === paramCase(element.name)) {
      return (
        <Rapid
          data={element}
          allData={river}
          url={url}
          level={level}
          selectLevel={setLevel}
          key={`rapid${key}`}
        />
      );
    }
    return null;
  });

  return (
    <>
      {isMobileAlertActive && window.screen.height > window.screen.width ? (
        <MobileAlert setIsMobileAlertActive={setIsMobileAlertActive} />
      ) : (
        rapidInstance
      )}

      <Modal
        dialogClassName="map"
        show={mapIsShowing}
        onHide={toggleMap}
        centered
      >
        <Map url={url} toggleMap={toggleMap} river={river} />
      </Modal>

      <div id="slider-position">
        <Slider
          min={river.level.levelMin}
          max={river.level.levelMax}
          units={river.level.levelUnits}
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

River.propTypes = {
  /** River data object */
  river: PropTypes.object.isRequired,
  /** Url to match. This is how rapid is identified. */
  url: PropTypes.string.isRequired,
  /** Automatically passed by router. */
  match: PropTypes.object.isRequired,
};

export default withRouter(River);
