import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { paramCase } from "change-case";
import "./PutIn.css";

const PutIn = (props) => {
  let contributors = props.data.contributors.toString();

  return (
    <div className="PutIn-wrapper">
      <div className="header">
        <div id="pre-title">Welcome to the</div>
        <div id="title">{props.data.name}</div>

        <Link
          to={`${props.url}/${paramCase(props.data.rapids[0].name)}`}
          className="child"
        >
          <div className="button">Click to Continue...</div>
        </Link>
      </div>

      <div className="footer">
        <div className="footer-grid-wrapper">
          <div className="child" id="info">
            <div className="title">Info</div>
            <div>{props.data.info}</div>
          </div>
          {props.data.contributors.length > 0 && (
            <div className="child" id="contributors">
              <div className="title">Contributors</div>
              <div>{contributors}</div>
            </div>
          )}

          {props.data.sponsors[0].logo.length > 0 && (
            <div className="child" id="logos">
              <div className="title">Brought to you by...</div>
              <a
                href={props.data.sponsors[0].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require(`../../river-data/${paramCase(
                    props.data.name
                  )}/${props.data.sponsors[0].logo}`)}
                  alt={`${paramCase(props.data.sponsors[0].logo)}`}
                  width="100%"
                />
              </a>
            </div>
          )}
          <div className="child" id="access">
            <div className="title">Access</div>
            <div>{props.data.desc}</div>
          </div>
          <a
            href={props.data.putIn}
            className="child access-link"
            id="putin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="title">Put In</div>
          </a>
          <a
            href={props.data.takeOut}
            className="child access-link"
            id="takeout"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="title">Take Out</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PutIn;
