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
import { Exists, UnderConst, DoesNotExist } from "./RiverCards";
import GithubCorner from "react-github-corner";

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
      .filter((chunk) => Object.keys(chunk).length !== 0)
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
    var labelArr =
      this.props.dataArr !== null
        ? this.riverSearch(this.props.dataArr, this.state.value)
        : [];

    return (
      <div className="Global-background">
        <div className="Global">
          <Route>
            <div className="headerWrapper">

              <img id="logo" src="./KayakLogo.png" alt="logo"/>
              

              <div>
                <div id="title">BENT SHAFT MAPS</div>
                <div id="subtitle">WHITEWATER IMMORTALIZED</div>
              </div>
            </div>

            <SearchBar
              value={this.state.value}
              handleChange={this.handleChange}
            />

            <div className="river-wrapper">{labelArr}</div>
            <GithubCorner
              octoColor="#85afd6"
              href="https://github.com/JeffThorslund/Ottawa-River-Paddling-Guide"
            />
          </Route>
        </div>
      </div>
    );
  }
}

export default Global;
