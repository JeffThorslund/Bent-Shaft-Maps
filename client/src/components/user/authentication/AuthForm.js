import React from "react";
import { useForm } from "react-hook-form";

const AuthForm = ({ formData: { title, fields, buttons } }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // DATA OUTPUT
    // {
    // name: "test",
    // email: "test@tester.com",
    // password: "testtest",
    // }
  };

  //   Input Groups
  const inputs = fields.map((field, index) => (
    <div key={index} className="form-group">
      <label className="form-label">{field.label}</label>
      <input ref={register} className="form-control" {...field.attributes} />
    </div>
  ));

  //   Buttons
  const button = buttons.map((button, index) => (
    <button
      className={`btn mr-3 ${button.varient}`}
      key={index}
      type={button.type}
    >
      {button.value}
    </button>
  ));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col form">
      <h1>{title}</h1>
      {inputs}
      {button}
    </form>
  );
};

export default AuthForm;
