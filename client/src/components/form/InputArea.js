import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { capitalCase, paramCase } from "change-case";
import { validate } from "./Validation";
const axios = require("axios");

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      riverList: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.river != prevProps.river && this.props.river != null) {
      axios
        .post("/api/getlist", {
          path: `./client/src/river-data/${paramCase(
            this.props.dataArr[this.props.river].name
          )}/maps`,
        })
        .then((response) => {
          this.setState({ riverList: JSON.parse(response.data).list });
        })
        .catch((error) => {});
    }
  }

  render() {
    const { river, rapid, feature, featureName, dataArr } = this.props;

    return (
      <>
        <div className="input-area">
          <Formik
            initialValues={this.props.dataArr} //set values:_________
            onSubmit={(values) => {
              console.log("submitted")
              axios
                .post("/api/updateData", {
                 values,
                })
                .then((response) => {
                  this.setState({ riverList: JSON.parse(response.data).list });
                })
                .catch((error) => {});
            }}
          >
            {({ values }) => {
              const data =
                feature !== null
                  ? values[river].rapids[rapid][featureName][feature]
                  : rapid !== null
                  ? values[river].rapids[rapid]
                  : river !== null
                  ? values[river]
                  : null;

              let name =
                feature !== null
                  ? `[${river}][rapids][${rapid}][${featureName}][${feature}]`
                  : rapid !== null
                  ? `[${river}][rapids][${rapid}]`
                  : river !== null
                  ? `[${river}]`
                  : null;
              let list = [];
              let tempName = "";
              const parseObject = (dataObj, name) => {
                for (let elem in dataObj) {
                  tempName = `${name}.${elem}`;
                  if (
                    typeof dataObj[elem] == "object" &&
                    !Array.isArray(dataObj[elem])
                  ) {
                    parseObject(dataObj[elem], tempName);
                  } else if (!Array.isArray(data[elem]) || elem == "range") {
                    if (elem == "pointerDirection") {
                      list.push(
                        <div className="input-field">
                          <div>{capitalCase(elem)}:</div>
                          <Field as="select" name={tempName} key={elem}>
                            <option value="top">Top</option>
                            <option value="bottom">Bottom</option>
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                          </Field>
                        </div>
                      );
                    } else if (elem == "path") {
                      let options = this.state.riverList.map((path) => {
                        path = path.split(".")[0];
                        return <option value={path}>{path}</option>;
                      });
                      list.push(
                        <div className="input-field">
                          <div>{capitalCase(elem)}:</div>
                          <Field as="select" name={tempName} key={elem}>
                            {options}
                          </Field>
                        </div>
                      );
                    } else {
                      list.push(
                        <div className="input-field">
                          <div>{capitalCase(elem)}:</div>
                          <Field name={tempName} key={elem} />
                          {/*{validate(tempName)}*/}
                        </div>
                      );
                    }
                  }
                }
                return list;
              };

              return (
                <Form>
                  {parseObject(data, name)}
                  <button type="submit" className="member" id="submit">
                    Submit
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
        )
      </>
    );
  }
}

export default InputArea;
