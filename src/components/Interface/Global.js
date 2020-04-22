import React from "react";
import "./Global.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import SearchBar from "./SearchBar";
import RiverList from "../../RiverList";
import idParser from "../../tools/idParser";

class Global extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const x = new RegExp(`${this.state.value}`, "i");

    const labelArray = RiverList.filter((elem) => {
      if (x.test(`${elem.name + elem.location}`)) {
        return true;
      } else {
        return false;
      }
    }).map((elem) => {
      return (
        <div className="river-label">
          <Link to={`/${idParser(elem.name)}/mccoys-chute-rapid`}>
            <div id="name">{elem.name}</div>
            <div id="location">{elem.location}</div>
            <div id="class">Class {elem.class}</div>
          </Link>
        </div>
      );
    });

    return (
      <div className="Global">
        <Route>
          <div id="title"> Wet Exit Guides </div>
          <div id="subtitle"> Your source for detailed whitewater maps. </div>
          <SearchBar
            value={this.props.value}
            handleChange={this.handleChange}
          />
          <div className="river-wrapper">{labelArray}</div>
        </Route>
      </div>
    );
  }
}

export default Global;
