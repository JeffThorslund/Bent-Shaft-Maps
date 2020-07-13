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
import findRapidFromId from "../../tools/findRapidFromId";

const NextRapid = (props) => {
  const {
    arrows: { linkId, bottom, right },
    url,
    allData,
  } = props;

  const style = {
    bottom: `${bottom}vh`,
    right: `${right}vw`,
  };

  const nextRapidName = findRapidFromId(linkId, allData).name;

  return (
    <Link to={`${url}/${paramCase(nextRapidName)}`}>
      <div className="NextRapid" style={style}>
        <div className="name">{nextRapidName}</div>
      </div>
    </Link>
  );
};

export default NextRapid;

NextRapid.propTypes = {
  arrows: PropTypes.exact({
    id: PropTypes.string.isRequired,
    linkId: PropTypes.string.isRequired,
    bottom: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
};
