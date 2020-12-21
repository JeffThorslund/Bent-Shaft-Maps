import React, { useState } from "react";

const FormArea = ({ formData: { title, fieldData, buttonData }, children }) => {

  //Login Input Fields
  const [userEntry, setUserEntry] = useState({});

  //onChange Handler
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUserEntry((userEntry) => {
      return {
        ...userEntry,
        [name]: value,
      };
    });
  };

  //Form Data
  const fields = fieldData.map((field) => {
    const name = field.attributes.name;
    return (
      <div className="form-group" key={field.controlId}>
        <div className="form-label">{field.formLabel}</div>
        <div
          className="form-control"
          {...field.attributes}
          onChange={handleChange}
          value={userEntry[name]}
        />
      </div>
    );
  });

  //Button Array
  const buttons = buttonData.map((button) => {
    return (
      <div
        key={button.id}
        className={`btn mr-3 ${button.varient}`}
        type={button.type}
        onClick={(e) => button.handleClick(e, userEntry)}
      >
        {button.value}
      </div>
    );
  });

  return (
    <div className="col">
      <div className="form">
        <h1>{title}</h1>
        {fields}
        {buttons}
      </div>
      {children}
    </div>
  );
};

export default FormArea;
