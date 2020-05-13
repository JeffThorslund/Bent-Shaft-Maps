import React from "react";
import Global from "./Global";
import RiverRouter from "./RiverRouter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { paramCase } from "change-case";

import readRiverFilesRequest from "../../tools/serverless/readRiverFilesRequest";

class GlobalRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    readRiverFilesRequest("./src/river-data").then((response) => {
      response.json().then((value) => {
        this.setState({ data: value.rivers });
      });
    });
  }

  render() {
    var routeArray;
    if (this.state.data != null) {
      routeArray = this.state.data
        .filter((chunk) => Object.keys(chunk).length !== 0)
        .map((elem, key) => {
          console.log(elem.riverName);
          return (
            <Route path={`/${paramCase(elem.riverName)}`} key={`river${key}`}>
              <RiverRouter data={elem} />
            </Route>
          );
        });
    } else {
      routeArray = [];
    }

    return (
      <Switch>
        <Route exact path="/">
          <Global dataArr={this.state.data} />
        </Route>

        {routeArray}
      </Switch>
    );
  }
}

export default GlobalRouter;
