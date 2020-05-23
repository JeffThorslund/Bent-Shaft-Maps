import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { capitalCase, paramCase } from "change-case";
import SimpleReactValidator from "simple-react-validator";
import { rules } from "./validationRules";
import { casePointerDirection, caseMapList, caseArrowList, caseSymbolList } from "./inputCases";
const axios = require("axios");

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      riverList: null,
    };
    this.validator = new SimpleReactValidator();
  }

  componentDidUpdate(prevProps) {
    //get river list
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
              if (this.validator.allValid()) {
                axios
                  .post("/api/updateData", {
                    values,
                  })
                  .then((response) => {
                    console.log(response.data);
                  })
                  .catch((error) => {
                    throw error;
                  });

                this.props.forceUpdateHandler();
              } else {
                this.validator.showMessages();
                this.forceUpdate();
              }
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
              let tempPath;

              const parseObject = (dataObj, name, path) => {
                for (let elem in dataObj) {
                  tempName = `${name}.${elem}`;
                  tempPath = dataObj[elem];
                  //does not render these elems
                  if (["viewBox", "id"].includes(elem)) {
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
                          caseMapList(elem, tempName, this.state.riverList)
                        );
                        break;
                        case "type":
                        list.push(
                          caseSymbolList(elem, tempName)
                        );
                        break;
                      case "linkId":
                      list.push(caseArrowList(elem, tempName, dataArr[0]))
                        break;
                      default:
                        list.push(
                          <div className="input-field">
                            <div>{capitalCase(elem)}:</div>
                            <Field name={tempName} key={elem} />
                            {this.validator.message(
                              elem,
                              dataObj[elem],
                              //[{ regex: /dad/}]
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
        )
      </>
    );
  }
}

export default InputArea;
