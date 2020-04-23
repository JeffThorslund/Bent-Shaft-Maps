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
import RiverList from "../../riverdata/RiverList";
import { Exists, UnderConst, DoesNotExist } from "./RiverCards";

class Global extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  riverSearch = (dataArr, value) => {
    const param = new RegExp(value, "i");
    const keptArr = dataArr
      .filter((elem) => {
        if (param.test(elem.name) || param.test(elem.location)) {
          return true;
        } else {
          return false;
        }
      })
      .map((elem) => {
        let locationResult = elem.location;
        let nameResult = elem.name;
        if (value.length > 0) {
          locationResult = locationResult.replace(
            new RegExp(value, "i"),
            (match) => {
              return `<div id='selected'>${match}</div>`;
            }
          );
          nameResult = nameResult.replace(new RegExp(value, "i"), (match) => {
            return `<div id='selected'>${match}</div>`;
          });
        }

        return !elem.underConst ? (
          <Exists
            elem={elem}
            nameResult={nameResult}
            locationResult={locationResult}
          />
        ) : (
          <UnderConst
            elem={elem}
            nameResult={nameResult}
            locationResult={locationResult}
          />
        );
      });

    if (keptArr.length > 0) {
      return keptArr;
    } else {
      return <DoesNotExist />;
    }
  };

  render() {
    const labelArr = this.riverSearch(RiverList, this.state.value);
    return (
      <div className="Global">
        <Route>
          <div id="title"> Wet Exit Guides </div>
          <div id="subtitle"> Your source for detailed whitewater maps. </div>
          <SearchBar
            value={this.props.value}
            handleChange={this.handleChange}
          />
          <div className="river-wrapper">{labelArr}</div>
        </Route>
      </div>
    );
  }
}

export default Global;