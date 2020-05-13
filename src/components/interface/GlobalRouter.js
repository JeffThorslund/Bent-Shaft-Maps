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

import idParser from "../../tools/idParser";
import readRiverFilesRequest from "../../tools/serverless/readRiverFilesRequest";
import ottawaRiver from "../../river-data/ottawa-river/temp_data.json";


class GlobalRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    readRiverFilesRequest("./src/river-data")
      .then(response => {
        response.json().then((value) => { console.log(value.rivers); this.setState(value.rivers); })
      });
  }

  render() {
    var routeArray;
    if (this.state.data != null) {
      routeArray = this.state.data.map((elem, key) => {
        return (
          <Route path={`/${idParser(elem.name)}`} key={`river${key}`}>
            <RiverRouter data={elem.data} global={elem.global} />
          </Route>
        );
      });
    } else {
      routeArray = [];
    }

    return (
      <Switch>
        <Route exact path="/">
          <Global />
        </Route>

        {routeArray}
      </Switch>
    );
  };
}

export default GlobalRouter;
