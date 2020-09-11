import React, { useState } from "react";
import Rapid from "../rapid/Rapid";
import Map from "./Map";
import { withRouter } from "react-router-dom";
import GeneralButton from "../general/GeneralButton";
import { paramCase } from "change-case";
import MobileAlert from "./MobileAlert";
import Slider from "./Slider";

const River = (props) => {
  const [level, setLevel] = useState(0);
  const [mapIsShowing, setMapIsShowing] = useState(false);

  const toggleMap = () => {
    setMapIsShowing((prevMapIsShowing) => {
      return !prevMapIsShowing;
    });
  };

  // Create Rapid Instance
  const rapidInstance = props.data.rapids.map((element, key) => {
    if (props.match.params.id === paramCase(element.name)) {
      return (
        <Rapid
          data={element}
          allData={props.data}
          url={props.url}
          level={level}
          selectLevel={setLevel}
          key={`rapid${key}`}
        />
      );
    }
    return null;
  });

  return (
    <div className="App">

      <MobileAlert />

      {rapidInstance}

      <Map
        mapIsShowing={mapIsShowing}
        url={props.url}
        toggleMap={toggleMap}
        data={props.data}
      />

      <div id="slider-position">
        <Slider
          min={props.data.level.levelMin}
          max={props.data.level.levelMax}
          units={props.data.level.levelUnits}
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
    </div>
  );
};

export default withRouter(River);
