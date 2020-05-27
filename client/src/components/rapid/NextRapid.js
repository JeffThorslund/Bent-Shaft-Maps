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
    arrows: { linkId, bottom, right },
    url,
    allData,
  } = props;

  const style = {
    bottom: `${bottom}vh`,
    right: `${right}vw`,
  };

  const findNextName = (linkId) => {
    for (let rapid of props.allData.rapids) {
      //console.log("search started", linkId, rapid.id, allData.rapids);
      if (linkId == rapid.id) {
        //console.log("match", linkId, rapid.id);
        return rapid.name;
      }
    }
  };

  return (
    <Link to={`${url}/${paramCase(findNextName(linkId))}`}>
      <div className="NextRapid" style={style}>
        <div className="name">{findNextName(linkId)}</div>
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
