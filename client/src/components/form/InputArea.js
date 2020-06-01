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
      this.props.riverIndex !== prevProps.riverIndex &&
      this.props.riverIndex !== null
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

  handleSubmit = (rivers, riverIndex, river) => {
    axios
      .post("/api/handleSubmit", {
        rivers: rivers,
        riverIndex: riverIndex,
        river: river,
      })
      .then((response) => {
        this.props.triggerUpdate();
      })
      .catch((error) => {
        throw error;
      });
  };

  handleDelete = (
    rivers,
    riverIndex,
    rapidIndex,
    featureType,
    featureIndex
  ) => {
    axios
      .post("/api/handleDelete", {
        rivers: rivers,
        riverIndex: riverIndex,
        rapidIndex: rapidIndex,
        featureType: featureType,
        featureIndex: featureIndex,
      })
      .then((response) => {
        this.props.triggerUpdate();
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
                this.handleSubmit(rivers, riverIndex, values[riverIndex]);
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

              const parseObject = (dataObj, name) => {
                for (let elem in dataObj) {
                  tempName = `${name}.${elem}`;
                  //does not render these elems
                  if (
                    ["viewBox", "id"].includes(elem) ||
                    tempName === `[${riverIndex}].name`
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
                  else if (!Array.isArray(data[elem]) || elem === "range") {
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
                  {this.props.rapidIndex !== null && (
                    <>
                      <button
                        type="submit"
                        className="member action"
                        id="submit"
                      >
                        Submit Changes
                      </button>

                      <button
                        type="button"
                        className="member action"
                        id="delete"
                        onClick={() =>
                          this.handleDelete(
                            rivers,
                            riverIndex,
                            rapidIndex,
                            featureType,
                            featureIndex
                          )
                        }
                      >
                        Delete
                      </button>
                    </>
                  )}
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
