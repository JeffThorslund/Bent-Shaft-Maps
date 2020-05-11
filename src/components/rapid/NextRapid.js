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
import idParser from "../../tools/idParser";
import PropTypes from "prop-types";

const NextRapid = (props) => {
  const {
    arrows: { name, bottom, right },
    url,
  } = props;

  const style = {
    bottom: bottom,
    right: right,
  };

  return (
    <Link to={`${url}/${idParser(name)}`}>
      <div className="NextRapid" style={style}>
        <div className="name">{name}</div>
      </div>
    </Link>
  );
};

export default NextRapid;

NextRapid.propTypes = {
  arrows: PropTypes.shape({
    //Make 'exact' when rotation is removed from data object.
    name: PropTypes.string.isRequired,
    bottom: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
};
