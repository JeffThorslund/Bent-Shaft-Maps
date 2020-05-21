import React from "react";
import "./NextRapid.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { paramCase } from "change-case";
import PropTypes from "prop-types";

const NextRapid = (props) => {
  const {
    arrows: { name, bottom, right },
    url,
  } = props;

  const style = {
    bottom: `${bottom}vh`,
    right: `${right}vw`,
  };

  return (
    <Link to={`${url}/${paramCase(name)}`}>
      <div className="NextRapid" style={style}>
        <div className="name">{name}</div>
      </div>
    </Link>
  );
};

export default NextRapid;

NextRapid.propTypes = {
  arrows: PropTypes.exact({
    name: PropTypes.string.isRequired,
    bottom: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
};
