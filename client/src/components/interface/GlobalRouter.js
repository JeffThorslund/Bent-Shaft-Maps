import React from "react";
import Global from "./Global";
import RiverRouter from "./RiverRouter";
import Form from "../form/Form.js";
import Test from "../test/Test";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { paramCase } from "change-case";

import readRiverFilesRequest from "../../tools/requests/readRiverFilesRequest";

class GlobalRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rivers: null };
  }

  forceUpdateHandler = () => {};

  //Removes all empty objects and sets river data as state.
  componentDidMount() {
    readRiverFilesRequest("./client/src/river-data").then((response) => {
      response.json().then((value) => {
        let filtered = value.rivers.filter(
          (river) => river.name !== "Template River"
        );
        this.setState({ rivers: filtered });
      });
    });
  }

  render() {
    var routeArray;
    if (this.state.rivers != null) {
      routeArray = this.state.rivers.map((river, key) => {
        return (
          <Route path={`/${paramCase(river.name)}`} key={`river${key}`}>
            <RiverRouter data={river} />
          </Route>
        );
      });
    } else {
      routeArray = [];
    }

    if (this.state.rivers != null) {
      return (
        <Switch>
          <Route exact path="/" key="home">
            <Global dataArr={this.state.rivers} />
          </Route>

          <Route exact path="/form" key="form">
            <Form
              rivers={this.state.rivers}
              forceUpdateHandler={this.forceUpdateHandler}
            />
          </Route>

          <Route exact path="/test" key="test">
            <Test />
          </Route>

          {routeArray}
        </Switch>
      );
    } else return null;
  }
}

export default GlobalRouter;
