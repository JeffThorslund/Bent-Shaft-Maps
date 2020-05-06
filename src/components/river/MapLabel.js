import React from "react";
import "./MapLabel.css";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import idParser from "../../tools/idParser";

const MapLabel = (props) => {
  const pointerDirection = (pointerDirection) => {
    switch (
      pointerDirection // starting coord
    ) {
      case "top":
        return "50,100 ";

      case "right":
        return "0,50 ";

      case "bottom":
        return "50,0 ";

      case "left":
        return "100,50 ";

      default:
        return "nutting";
    }
  };

  const style = {
    top: props.mapLabel.titleTop,
    left: props.mapLabel.titleLeft,
  };

  const pickFromMap = () => {
    //Click on a mapLabel
    props.toggleSetting(props.setting); //Closes map
    //props.selectRapid(name); //Sets chosen rapid to current
  };

  const className = `MapLabel ${props.mapLabel.pointerDirection}`;

  return (
    <div className={className} style={style}>
      <Link to={`${props.url}/${idParser(props.name)}`}>
        <div className="name" onClick={() => pickFromMap()}>
          {props.name}
        </div>
      </Link>
      <svg
        viewBox="0 0 100 100"
        height="20vh"
        width="10vw"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <polyline
          className="pointer"
          points={
            pointerDirection(props.mapLabel.pointerDirection) +
            props.mapLabel.pointerCoordinates
          }
        />
      </svg>
    </div>
  );
};

export default MapLabel;

MapLabel.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mapLabel: PropTypes.object.isRequired,
  toggleSetting: PropTypes.func.isRequired,
  selectRapid: PropTypes.func.isRequired,
};
