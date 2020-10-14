import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { capitalCase } from "change-case";
import shortid from "shortid";
import FormFields from "./FormFields";

const CreateAndEditFields = ({
  config,
  values,
  topic,
  nextTopic,
  children,
  prevPath = "",
  setFieldValue,
  subtitle,
}) => {
  const [index, setIndex] = useState(null);
  const [next, setNext] = useState(false);

  const path = `${prevPath}${topic}[${index}]`;

  const tags = values[topic].map((item, i) => {
    return (
      <Button onClick={() => setIndex(i)} key={i} className="m-1">
        {item.name}
      </Button>
    );
  });

  tags.push(
    <Button
      onClick={() => handleAddNew(config[topic][0])}
      className="m-1"
      variant="danger"
      disabled={
        values[topic][values[topic].length - 1]["name"] ===
        config[topic][0]["name"]["init"]
      }
      key="uniqueAddNewButton"
    >
      Add New {capitalCase(topic.slice(0, -1))}
    </Button>
  );

  const handleAddNew = (obj) => {
    const initialValues = {};
    for (let item in obj) {
      console.log(item);
      if (obj[item].hasOwnProperty("init")) {
        initialValues[item] = obj[item].init;
      } else if (item === "id") {
        initialValues[item] = `${topic}${shortid.generate()}`;
      } else if (item === nextTopic) {
        initialValues[item] = [];
      }
    }

    setIndex(values[topic].length);

    setFieldValue(
      `${prevPath}${topic}[${values[topic].length}]`,
      initialValues
    );
  };

  return !next ? (
    <>
      <Row className="justify-content-center">
        <Col>
          <div className="">
            <h1 className="text-center"> {capitalCase(topic)}</h1>
            <div className="text-center">
              <i>{subtitle}</i>
            </div>
            <hr />
          </div>

          <div className="select-tags">
            <h4 className="text-center">
              Select an existing {topic.slice(0, -1)} to edit <b>OR</b> add one
              that does not already exist.
            </h4>
            <div>{tags}</div>
            <hr />
          </div>

          {index !== null && (
            <>
              <FormFields path={path} config={config} topic={topic} setFieldValue={setFieldValue}/>

              <div className="pb-2">
                These changes will be saved to the river database. Do you want
                to continue?
              </div>
              <div>
                <Button
                  disabled={
                    values[topic][values[topic].length - 1]["name"] === ""
                  }
                  onClick={() => setNext(true)}
                >
                  Save Changes
                </Button>
                <hr />
              </div>
            </>
          )}
        </Col>
      </Row>
    </>
  ) : (
    children({
      config: config[topic][0],
      values: values[topic][index],
      prevPath: path,
      setFieldValue: setFieldValue,
      topic: nextTopic,
    })
  );
};

export default CreateAndEditFields;
