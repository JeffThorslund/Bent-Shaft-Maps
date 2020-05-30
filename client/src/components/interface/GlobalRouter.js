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

const axios = require("axios").default;

class GlobalRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rivers: null };
  }

  getRiverData = () => {
    axios
      .post("/api/data", {
        path: "./client/src/river-data",
      })
      .then((response) => {
        //filter template river
        let filtered = response.data.rivers.filter(
          (river) => river.name !== "Template River"
        );
        this.setState({ rivers: filtered });
        console.log("state updated")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    console.log("Component Did Mount");
    this.getRiverData();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      console.log("Component Did Update");
      this.getRiverData();
    }
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
              changeState={this.changeState}
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
