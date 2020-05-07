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
import RiverList from "../../river-data/RiverList";
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

  //Fetching from back end
  componentDidMount() {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((customers) =>
        this.setState(
          { backendName: customers[0].name },
          () => console.log("customer name fetched"),
          customers[0].name
        )
      );
  }

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
      <div className="Global-background">
        <div className="Global">
          <Route>
            <div id="title"> Wet Exit Guides </div>
            <div id="subtitle">{this.state.backendName}</div>

            <SearchBar
              value={this.props.value}
              handleChange={this.handleChange}
            />

            <div className="river-wrapper">{labelArr}</div>
            <GithubCorner
              octoColor="#e1e2e2ff"
              href="https://github.com/JeffThorslund/Ottawa-River-Paddling-Guide"
            />
          </Route>
        </div>
      </div>
    );
  }
}

export default Global;
