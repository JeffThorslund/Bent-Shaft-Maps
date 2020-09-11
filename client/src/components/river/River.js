import React, { useState } from "react";
import "../../stylesheets/River.css";
import Rapid from "../rapid/Rapid";
import Slider from "./Slider";
import Map from "./Map";
import { withRouter } from "react-router-dom";
import GeneralButton from "../general/GeneralButton";
import { paramCase } from "change-case";
import MobileAlert from "./MobileAlert";

const River = (props) => {
  const [level, setLevel] = useState(null);
  const [mapIsShowing, setMapIsShowing] = useState(false);

  const toggleMap = () => {
    setMapIsShowing((prevMapIsShowing) => {
      return !prevMapIsShowing;
    });
  }

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
      {mapIsShowing && (
        <Map
          url={props.url}
          toggleMap={toggleMap}
          data={props.data}
        />
      )}

      {rapidInstance}
      <Slider selectLevel={setLevel} rapid={props.data} />

      <div className="toggle-board">
        <div id="map-bool">
          <GeneralButton
            onClick={toggleMap}
            text="Map"
          />
        </div>

        <div id="home">
          <GeneralButton to="/" text="Home" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(River);
