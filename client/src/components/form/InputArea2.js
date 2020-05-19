import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import Box from '@material-ui/core/Box';

const InputArea2 = (props) => {
  const { river, rapid, feature, featureName, dataArr } = props;

  return (
    <div>
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
                list.push(<Field name={name} key={elem} />);
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
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default InputArea2;
