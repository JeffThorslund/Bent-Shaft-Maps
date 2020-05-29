import React from "react";
import { Formik, Form, Field } from "formik";
import { capitalCase, paramCase } from "change-case";
import SimpleReactValidator from "simple-react-validator";
import { rules } from "./validationRules";
import {
  casePointerDirection,
  caseMapList,
  caseArrowList,
  caseSymbolList,
} from "./inputCases";
const axios = require("axios");

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapList: null,
    };
    this.validator = new SimpleReactValidator();
  }

  componentDidUpdate(prevProps) {
    //get list of maps
    if (
      this.props.riverIndex != prevProps.riverIndex &&
      this.props.riverIndex != null
    ) {
      axios
        .post("/api/getMapList", {
          path: `./client/src/river-data/${paramCase(
            this.props.rivers[this.props.riverIndex].name
          )}/maps`,
        })
        .then((response) => {
          this.setState({ mapList: JSON.parse(response.data).list });
        })
        .catch((error) => {
          throw error;
        });
    }
  }

  handleSubmit = (riverName, river) => {
    axios
      .post("/api/handleSubmit", {
        riverName: riverName,
        river: river,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        throw error;
      });
  };

  render() {
    const {
      riverIndex,
      rapidIndex,
      featureIndex,
      featureType,
      rivers,
    } = this.props;

    return (
      <>
        <div className="input-area">
          <Formik
            initialValues={rivers}
            enableReinitialize
            onSubmit={(values) => {
              if (this.validator.allValid()) {
                this.handleSubmit(
                  paramCase(rivers[riverIndex].name),
                  values[riverIndex]
                );
              } else {
                this.validator.showMessages();
                this.forceUpdate();
              }
            }}
          >
            {({ values }) => {
              const data =
                featureIndex !== null
                  ? values[riverIndex].rapids[rapidIndex][featureType][
                      featureIndex
                    ]
                  : rapidIndex !== null
                  ? values[riverIndex].rapids[rapidIndex]
                  : riverIndex !== null
                  ? values[riverIndex]
                  : null;

              let name =
                featureIndex !== null
                  ? `[${riverIndex}][rapids][${rapidIndex}][${featureType}][${featureIndex}]`
                  : rapidIndex !== null
                  ? `[${riverIndex}][rapids][${rapidIndex}]`
                  : riverIndex !== null
                  ? `[${riverIndex}]`
                  : null;

              let list = [];
              let tempName = "";
              let tempPath;

              const parseObject = (dataObj, name) => {
                for (let elem in dataObj) {
                  tempName = `${name}.${elem}`;
                  tempPath = dataObj[elem];
                  //does not render these elems
                  if (
                    ["viewBox", "id"].includes(elem) ||
                    tempName == `[${riverIndex}].name`
                  ) {
                  }
                  //recursively digs into object type elems
                  else if (
                    typeof dataObj[elem] == "object" &&
                    !Array.isArray(dataObj[elem])
                  ) {
                    parseObject(dataObj[elem], tempName);
                  }
                  //handles special cases
                  else if (!Array.isArray(data[elem]) || elem == "range") {
                    switch (elem) {
                      case "pointerDirection":
                        list.push(casePointerDirection(elem, tempName));
                        break;
                      case "path":
                        list.push(
                          caseMapList(elem, tempName, this.state.mapList)
                        );
                        break;
                      case "type":
                        list.push(caseSymbolList(elem, tempName));
                        break;
                      case "linkId":
                        list.push(
                          caseArrowList(elem, tempName, rivers[riverIndex])
                        );
                        break;
                      default:
                        list.push(
                          <div className="input-field">
                            <div>{capitalCase(elem)}:</div>
                            <Field name={tempName} key={elem} />
                            {this.validator.message(
                              elem,
                              dataObj[elem],
                              rules(elem)
                            )}
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
      </>
    );
  }
}

export default InputArea;
