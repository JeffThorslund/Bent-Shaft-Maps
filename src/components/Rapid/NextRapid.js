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

const NextRapid = (props) => {
  const style = {
    bottom: props.arrows.bottom,
    right: props.arrows.right,
  };

  return (
    <Link to={`${props.url}/${idParser(props.arrows.name)}`}>
      <div className="NextRapid" style={style}>
        <div className="name">{props.arrows.name}</div>
      </div>
    </Link>
  );
};

export default NextRapid;
