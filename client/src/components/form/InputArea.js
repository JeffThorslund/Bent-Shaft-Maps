import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { capitalCase } from "change-case";
import { paramCase } from "change-case";
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
          console.log(response.data);
          this.setState({ riverList: JSON.parse(response.data).list });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const { river, rapid, feature, featureName, dataArr } = this.props;

    return (
      <div className="input-area">
        <Formik
          initialValues={dataArr} //set values:_________
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => {
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
            const parseObject = (dataObj, name) => {
              for (let elem in dataObj) {
                name = `${name}.${elem}`;
                if (
                  typeof dataObj[elem] == "object" &&
                  !Array.isArray(dataObj[elem])
                ) {
                  parseObject(dataObj[elem], name);
                } else if (!Array.isArray(data[elem]) || elem == "range") {
                  if (elem == "pointerDirection") {
                    list.push(
                      <div className="input-field">
                        <div>{capitalCase(elem)}:</div>
                        <Field as="select" name={name} key={elem}>
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
                        <Field as="select" name={name} key={elem}>
                          {options}
                        </Field>
                      </div>
                    );
                  } else {
                    list.push(
                      <div className="input-field">
                        <div>{capitalCase(elem)}:</div>
                        <Field name={name} key={elem} />
                      </div>
                    );
                  }
                }

                let temp = name.split(".");
                temp.pop();
                name = temp.join(".");
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
    );
  }
}

export default InputArea;
