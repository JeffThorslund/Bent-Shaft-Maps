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
    this.state = { data: null };
  }

  //Removes all empty objects and sets river data as state.
  componentDidMount() {
    readRiverFilesRequest("./client/src/river-data").then((response) => {
      response.json().then((value) => {
        let filtered = value.rivers.filter(
          (elem) => Object.keys(elem).length > 1
        );
        this.setState({ data: filtered });
      });
    });
  }

  render() {
    var routeArray;
    if (this.state.data != null) {
      routeArray = this.state.data.map((elem, key) => {
        return (
          <Route path={`/${paramCase(elem.name)}`} key={`river${key}`}>
            <RiverRouter data={elem} />
          </Route>
        );
      });
    } else {
      routeArray = [];
    }

    if (this.state.data != null) {
      return (
        <Switch>
          <Route exact path="/">
            <Global dataArr={this.state.data} />
          </Route>

          <Route exact path="/form">
            <Form dataArr={this.state.data} />
          </Route>

          <Route exact path="/test">
            <Test />
          </Route>

          {routeArray}
        </Switch>
      );
    } else return null;
  }
}

export default GlobalRouter;
