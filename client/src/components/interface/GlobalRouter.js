import React from "react";
import Global from "./Global";
import RiverRouter from "./RiverRouter";
import Form from "../form/Form.js";
import ImageUpload from "../interface/ImageUpload";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { paramCase } from "change-case";

class GlobalRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRiverData("/api/getData", "./client/src/river-data");
  }

  triggerUpdate = () => {
    this.props.getRiverData("/api/getData", "./client/src/river-data");
  };

  render() {
    var routeArray;
    if (this.props.rivers != null) {
      routeArray = this.props.rivers.map((river, key) => {
        return (
          <Route path={`/${paramCase(river.name)}`} key={`river${key}`}>
            <RiverRouter data={river} />
          </Route>
        );
      });
    } else {
      routeArray = [];
    }

    if (this.props.rivers != null) {
      return (
        <Switch>
          <Route exact path="/" key="home">
            <Global dataArr={this.props.rivers} />
          </Route>

          {process.env.NODE_ENV === "development" && (
            <Route exact path="/form" key="form">
              <Form
                rivers={this.props.rivers}
                triggerUpdate={this.triggerUpdate}
              />
            </Route>
          )}

          {process.env.NODE_ENV === "development" && (
            <Route exact path="/imageUpload" key="imageUpload">
              <ImageUpload />
            </Route>
          )}
          {routeArray}
        </Switch>
      );
    } else return null;
  }
}

export default GlobalRouter;
