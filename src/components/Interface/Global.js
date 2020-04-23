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

  riverSearch = (dataArr, value) => {
    //search parameter
    const param = new RegExp(value, "i");
    const keptArr = dataArr
      //filters based on if string contains regex
      .filter((elem) => {
        if (param.test(elem.name) || param.test(elem.location)) {
          return true;
        } else {
          return false;
        }
      })
      //maps string to a label
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

        return (
          <div className="river-label">
            <Link to={`/${idParser(elem.name)}/mccoys-chute-rapid`}>
              <div
                id="name"
                dangerouslySetInnerHTML={{ __html: nameResult }}
              ></div>

              <div
                id="location"
                dangerouslySetInnerHTML={{ __html: locationResult }}
              ></div>

              <div id="class">Class {elem.class}</div>
            </Link>
          </div>
        );
      });

    if (keptArr.length > 0) {
      return keptArr;
    } else {
      return (
        <div className="river-label make-one">
          <div className="main">This river does not exist...yet.</div>
          <div className="sub">
            Creating a river is easier than you think. If you have basic
            programming skills, and you know the river, you will be able to
            complete it in 5 to 6 hours. This guide walks you through every step
            of the process.
          </div>

          
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/JeffThorslund/Ottawa-River-Paddling-Guide"
            >
              <div className="guide-link">
          
                Click here to make your own river!
              </div>
            </a>
          </div>
        
      );
    }
  };

  render() {
    //const x = new RegExp(`${this.state.value}`, "i");

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
